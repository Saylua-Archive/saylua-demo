"use strict";

import React, { Component } from 'react';
import SayluaView from './modules/SayluaView';
import logo from './logo.svg';
import Adventure from './modules/Adventure';
import 'scss/saylua.css';


class App extends Component {

  render() {
    return (
      <SayluaView>
        <Adventure className="adventure-container"/>
      </SayluaView>
    );
  };
}

export default App;
