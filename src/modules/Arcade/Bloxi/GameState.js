/* eslint { indent: 0 } */
import cloneDeep from 'lodash.clonedeep';

import BaseModel from './BaseModel';
import Matrix from './Matrix';

import { addCoins } from 'store';
import { store } from 'index';

const LB_FPS = 60;
const LB_MIN_TIMEOUT = 10;
const LB_LR_INTERVAL = 5; // delay for normal left/right movements
const LB_FIRST_LR_INTERVAL = 12; // delay for the first left/right movement, for single tapping
const LB_PIECES = [[0, 1, 0, 0, // i
                    0, 1, 0, 0,
                    0, 1, 0, 0,
                    0, 1, 0, 0],

                   [0, 0, 2, 0, // j
                    0, 0, 2, 0,
                    0, 2, 2, 0,
                    0, 0, 0, 0],

                   [0, 3, 0, 0, // l
                    0, 3, 0, 0,
                    0, 3, 3, 0,
                    0, 0, 0, 0],

                   [0, 0, 0, 0, // o
                    0, 4, 4, 0,
                    0, 4, 4, 0,
                    0, 0, 0, 0],

                   [0, 0, 0, 0, // t
                    5, 5, 5, 0,
                    0, 5, 0, 0,
                    0, 0, 0, 0],

                   [0, 0, 0, 0, // s
                    0, 6, 6, 0,
                    6, 6, 0, 0,
                    0, 0, 0, 0],

                   [0, 0, 0, 0, // z
                    7, 7, 0, 0,
                    0, 7, 7, 0,
                    0, 0, 0, 0]];

// GameState
// --------------------------------------
// Keeps track of the player's current tetris state.

export default class GameState extends BaseModel {
  clearGameState() {
    this.frames = 0;
    this.lastDrop = 0;
    this.lastLR = 0;
    this.LRCount = 0;
    this.timeout = 800;
    this.gameOver = false;
    this.paused = false;
    this.canDrop = true;
    this.canRotate = true;
    this.canSpeed = true;
    this.canPause = true;
    this.keyState = {};
    this.fast = false;
    this.score = 0;
    this.gameMatrix = new Matrix(18, 10);
    this.placedPieces = new Matrix(18, 10);
    this.nextPiece = null;
    this.piece = { matrix: new Matrix(4, 4), r: -3, c: 2 };

    this.gameLog = [];
    this.scoreSent = false;

    clearInterval(this.timer);
  }

  start() {
    this.clearGameState();
    this.getNextPiece();

    this.startTime = new Date().getTime();
    this.timer = setInterval(this.timeStep.bind(this), 1000 / LB_FPS);
  }

  isRunning() {
    return this.timer && !(this.gameOver || this.paused);
  }

  endGame() {
    this.piece = null;
    this.gameOver = true;

    // Send score. Give the player money.
    this.scoreSent = true;
    store.dispatch(addCoins(this.score));

    this.triggerUpdate();
  }

  timeStep() {
    if ((this.keyState[13] || this.keyState[80]) && (this.gameOver || !this.frames)) { // Enter, p
      this.start();
      this.canPause = false;
    }
    if ((this.keyState[13] || this.keyState[80]) && this.canPause) { // Enter, p
      this.pause();
      this.canPause = false;
    }
    if (!(this.keyState[13] || this.keyState[80])) { // Enter, p
      this.canPause = true;
    }

    if (!this.isRunning()) return;
    this.frames += 1;

    let timeout = this.timeout;
    if (this.keyState[32] && this.canDrop) { // Space
      this.drop();
      this.canDrop = false;
    }
    if (!this.keyState[32]) { // Space
      this.canDrop = true;
    }
    if ((this.keyState[38] || this.keyState[87]) && this.canRotate) { // Up, w
      this.rotate();
      this.canRotate = false;
    }
    if (!(this.keyState[38] || this.keyState[87])) { // Up, w
      this.canRotate = true;
    }
    if ((this.keyState[40] || this.keyState[83]) && this.canSpeed) { // Down, s
      this.speedUp();
    }
    if (!(this.keyState[40] || this.keyState[83])) { // Down, s
      this.canSpeed = true;
    }
    if (!(this.keyState[40] || this.keyState[83])) { // Down, s
      this.speedDown();
    }
    if ((this.keyState[37] || this.keyState[65]) && (this.frames - this.lastLR > LB_LR_INTERVAL)
          && !(this.LRCount === 1 && this.frames - this.lastLR < LB_FIRST_LR_INTERVAL)) { // Left, a
      this.lastLR = this.frames;
      this.moveLeft();
      this.LRCount += 1;
    }
    if ((this.keyState[39] || this.keyState[68]) && (this.frames - this.lastLR > LB_LR_INTERVAL)
          && !(this.LRCount === 1 && this.frames - this.lastLR < LB_FIRST_LR_INTERVAL)) { // Right, d
      this.lastLR = this.frames;
      this.moveRight();
      this.LRCount += 1;
    }
    if (!(this.keyState[39] || this.keyState[68])) {
      this.LRCount = 0;
    }
    if (this.fast && this.canSpeed) {
      timeout = Math.min(LB_MIN_TIMEOUT * 3, timeout);
    }
    if ((this.frames - this.lastDrop) / LB_FPS >= timeout / 1000) {
      this.lastDrop = this.frames;
      this.movePieceDown();
      this.draw();
    }
  }

  movePieceDown() {
    const p = this.piece;
    if (!this.canSpeed && p.r > -2) {
      this.canSpeed = true;
    }
    if (this.validPlacement(p.matrix, p.r + 1, p.c)) {
      p.r += 1;
      return true;
    }
    // If moving down is invalid, the piece cannot fall anymore.
    if (this.overTop(p.matrix, p.r, p.c)) {
      this.endGame();
    }
    this.placedPieces.addMatrix(p.matrix, p.r, p.c);
    this.canSpeed = false;

    this.getNextPiece();

    // Check if a line was made.
    if (this.clearLines(p.r, p.r + 4).length > 0) {
      this.score += 50;
      this.timeout -= 3;
    }

    return false;
  }

  clearLines(minRow, maxRow) {
    const matrix = this.placedPieces;
    const deleted = [];

    for (let i = minRow; i < maxRow; i++) {
      let j = 0;
      while (matrix.get(i, j) && j < matrix.width) {
        j += 1;
      }
      if (j === matrix.width) {
        // There is a line at i.
        deleted.push(i);
      }
    }
    matrix.deleteRows(deleted);
    return deleted;
  }

  // Check if a piece goes over the top and can't move
  overTop(piece, r, c) {
    const matrix = this.placedPieces;
    for (let i = 0; i < piece.height; i++) {
      for (let j = 0; j < piece.width; j++) {
        const row = r + i;
        const col = c + j;

        if (row < 0 && piece.get(i, j)) {
          // If the piece goes over the top.
          return true;
        }
      }
    }
    return false;
  }

  validPlacement(piece, r, c) {
    const matrix = this.placedPieces;
    for (let i = 0; i < piece.height; i++) {
      for (let j = 0; j < piece.width; j++) {
        const row = r + i;
        const col = c + j;

        if (matrix.withinBounds(row, col)) {
          // If the piece intersects another piece. Ignore ghost pieces with value >= 10.
          if (piece.get(i, j) && (matrix.get(row, col) && matrix.get(row, col) < 10)) {
            return false;
          }
        } else if (row >= 0 && piece.get(i, j)) {
          // If the piece goes past the sides or the bottom.
          // (don't count the top)
          return false;
        } else if ((col < 0 || col > 9) && piece.get(i, j)) {
          // If the piece goes past the sides (counting the top).
          return false;
        }
      }
    }
    return true;
  }

  getNextPiece() {
    if (!this.nextPiece) {
      this.setNextPiece();
    }
    this.piece = { matrix: this.nextPiece, r: -2, c: 3 };
    this.setNextPiece();
  }

  setNextPiece() {
    const i = Math.floor(Math.random() * LB_PIECES.length);
    this.nextPiece = new Matrix(4, 4, LB_PIECES[i]);
  }

  draw() {
    const matrix = cloneDeep(this.placedPieces);
    const p = this.piece;
    if (p) {
      matrix.addMatrix(p.matrix, p.r, p.c);
      // draw ghost piece
      const g = cloneDeep(p);
      for (let i = 0; i < g.matrix.data.length; i++) {
        if (g.matrix.data[i] !== 0) {
          g.matrix.data[i] += 10;
        }
      }
      // advance the ghost piece
      while (this.validPlacement(g.matrix, g.r + 1, g.c)) {
        g.r += 1;
      }
      matrix.addMatrix(g.matrix, g.r, g.c);
    }

    // gameMatrix is bound to a BlockGrid, which should render this.
    this.gameMatrix = matrix;

    // Make sure the component updates.
    this.triggerUpdate();
  }

  pause() {
    if (!this.timer) return;
    this.paused = !this.paused;
    this.triggerUpdate();
  }

  drop() {
    if (!this.isRunning()) return;
    while (this.movePieceDown());
    this.draw();
  }

  speedUp() {
    this.fast = true;
  }

  speedDown() {
    this.fast = false;
  }

  rotate() {
    if (!this.isRunning()) return;
    const p = cloneDeep(this.piece);
    p.matrix.rotate();
    if (this.validPlacement(p.matrix, p.r, p.c)) {
      this.piece = p;
      this.draw();
    }
  }

  moveLeft() {
    if (!this.isRunning()) return;
    const p = this.piece;
    if (this.validPlacement(p.matrix, p.r, p.c - 1)) {
      p.c -= 1;
      this.draw();
    }
  }

  moveRight() {
    if (!this.isRunning()) return;
    const p = this.piece;
    if (this.validPlacement(p.matrix, p.r, p.c + 1)) {
      p.c += 1;
      this.draw();
    }
  }
}
