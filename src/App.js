import React, { Component } from 'react';
import { Navigation, Button } from './components/common';

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
        <Navigation position='center' color='#333'>{this.listContent()}</Navigation>
        <Button color='#333' backgroundColor="#FFF">
          Login
        </Button>
      </div>
    );
  }
}
