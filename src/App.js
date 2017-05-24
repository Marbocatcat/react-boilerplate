import React, { Component } from 'react';
import { Navigation } from './components/common';

export default class App extends Component {

  listContent = () => {
    const list = ['Sign Up', 'Log In', 'About', 'Contact'];
    return list.map(item =>
      <li><a href="">{item}</a></li>
    );
  }

  render() {
    return (
      <div>
        <Navigation position='center'>{this.listContent()}</Navigation>
      </div>
    );
  }
}
