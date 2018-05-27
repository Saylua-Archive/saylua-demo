import React, { Component } from 'react';

import { addCoins } from 'store';
import { store } from 'index';

import { randomInt, formatNumber } from 'utils';
import Button from 'components/Button';

import SlotWheel from './SlotWheel';
import './SlotMachine.css';

const SPIN_COST = 404;

export default class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false,
      a: 4,
      b: 0,
      c: 4,
      prize: 0,
      prizeText: '',
    };
  }

  spin() {
    if (this.state.spinning) return;

    let prize = 0;
    let prizeText = '';

    const a = randomInt(9);
    const b = randomInt(9);
    const c = randomInt(9);

    this.setState({
      spinning: true,
      a,
      b,
      c,
      prize,
      prizeText,
    });
    store.dispatch(addCoins(-SPIN_COST));

    setTimeout(() => {
      if (a === b && b === c) {
        prize = SPIN_COST * 10;
        prizeText = `Triple!!!`;
      } else if (a === b || b === c || a === c) {
        prize = SPIN_COST * 2;
        prizeText = `Double!!`;
      } else if (a === 4 && b === 0 && c === 4) {
        prize = SPIN_COST * 100;
        prizeText = `Jackpot! 404 not found!`;
      }

      store.dispatch(addCoins(prize));

      this.setState({
        spinning: false,
        prize,
        prizeText,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p>
          {`Welcome to the 404 Casino! We're sorry if you were looking for
            something else... but since you're here, why not stay for a bit and relax?
            Play our slots for a bit. It only costs ${SPIN_COST} coins per spin! `}
        </p>
        <div className="slots">
          <SlotWheel items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} index={this.state.a} />
          <SlotWheel items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} index={this.state.b} />
          <SlotWheel items={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} index={this.state.c} />
        </div>
        <div className="slots-input">
          <Button onClick={this.spin.bind(this)}>Spin the slots! (Costs { SPIN_COST } coins)</Button>
        </div>
        <p>
          {this.state.prize ?
            `${this.state.prizeText} You won ${formatNumber(this.state.prize)} coins!`
            :
            ''
          }
        </p>
      </div>
    );
  }
}
