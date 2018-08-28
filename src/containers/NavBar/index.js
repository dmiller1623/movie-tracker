import React, { Component } from 'react';
import Login from '../../components/Login';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';


export default class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      displayedNav: <InitialAccountButtons handleLogin={this.handleLogin}/>
    };
  }
  
  handleLogin = () => {
    this.setState({ displayedNav: <Login />});
  }
  
  render() {
    return (
      <div>
        { this.state.displayedNav }
      </div>
    );
  }
}