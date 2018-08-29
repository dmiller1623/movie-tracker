import React, { Component } from 'react';
import Login from '../../components/Login';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      displayedNav: <InitialAccountButtons handleLogin={this.handleLogin}/>
    };
  }
  
  handleLogin = () => {
    this.setState({ displayedNav: <Login submitLogin={this.submitLogin}/>});
  }

  submitLogin = (event, email, password) => {
    event.preventDefault();
    //changed displayed nav to sign-out and view favorites
    this.props.loginUser(email, password);
  }
  
  render() {
    return (
      <div>
        { this.state.displayedNav }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatchToProps)(NavBar);