export default class Matrix {
  constructor(height, width, data) {
    this.height = height;
    this.width = width;
    this.data = data || Array(this.height * this.width).fill(0);
  }

  get(r, c) {
    return this.data[(r * this.width) + c];
  }

  set(r, c, val) {
    this.data[(r * this.width) + c] = val;
  }

  add(r, c, val) {
    this.data[(r * this.width) + c] += val;
  }

  addMatrix(other, r, c) {
    for (let i = 0; i < other.height; i++) {
      for (let j = 0; j < other.width; j++) {
        const row = r + i;
        const col = c + j;
        if (this.withinBounds(row, col) && !this.data[(row * this.width) + col]) {
          this.add(row, col, other.get(i, j));
        }
      }
    }
  }

  withinBounds(r, c) {
    return r >= 0 && c >= 0 && r < this.height && c < this.width;
  }

  deleteRows(rows) {
    // Make sure indices are in descending order, otherwise pain.
    rows.sort((a, b) => { return b - a; });

    for (let i = 0; i < rows.length; i++) {
      const k = rows[i];
      this.data.splice(k * this.width, this.width);
    }

    // Pad new zeroes at the top for the number of deleted rows.
    this.data = Array(rows.length * this.width).fill(0).concat(this.data);
  }

  rotate() {
    const width = this.width;
    const newData = this.data.map((val, i, arr) => {
      const r = Math.floor(i / width);
      const c = i % width;

      // Rotate 90. Transpose the matrix and reverse each column.
      return arr[(c * width) + (width - 1 - r)];
    });
    this.data = newData;
    this.width = this.height;
    this.height = width;
  }

  rows() {
    const result = [];
    for (let i = 0; i < this.height * this.width; i += this.width) {
      result[i] = this.data.slice(i, i + this.width);
    }
    return result;
  }
}
