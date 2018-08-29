import React, { Component } from 'react';
import Login from '../../containers/Login';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import { connect } from 'react-redux'
import SignOutBtn from '../SignOutBtn';



class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      userIsLoggingIn: false,
    };
  }
  
  handleLogin = () => {
    this.setState({ userIsLoggingIn: true });
  }

  logUserOut = () => {
    this.setState({ userIsLoggingIn: true })
  }
  
  render() {
    return (
      <div>
        {!this.state.userIsLoggingIn && <InitialAccountButtons handleLogin={this.handleLogin} /> }
        {this.state.userIsLoggingIn && <Login /> }
        {this.props.user !== {} && <SignOutBtn />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  user: state.user;
}

export default connect(mapStateToProps)(NavBar)