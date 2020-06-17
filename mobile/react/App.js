import React, { Component } from 'react';
import LoginView from './screens/login';


export default class App extends Component {

  constructor(props) 
  {
    super(props);
  }

  render() {
    return (
      <LoginView></LoginView>
    );
  }
}

