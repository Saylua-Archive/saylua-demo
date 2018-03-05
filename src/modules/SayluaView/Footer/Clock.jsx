import React, { Component } from 'react';

import moment from 'moment';

// The main Saylua layout component.
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    let date = moment();
    return (
      <span>
        <i className="far fa-clock" aria-hidden="true"></i>
        { ' ' + date.format('ddd, MMM DD, Y hh:mm:ss A') + ' SMT' }
      </span>
    );
  }
}
