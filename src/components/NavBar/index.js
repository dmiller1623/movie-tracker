import React, { Component } from 'react';
import Login from '../../containers/Login';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import { connect } from 'react-redux'
import UserAccountBtns from '../UserAccountBtns';
import { signOutUser } from '../../actions';
import SignUp from '../../containers/SignUp';


class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      pageStatus: ''
    };
  }
  
  handleLogin = () => {
    this.setState({ pageStatus: 'LOGIN'})
  }

  handleSignUp = () => {
    this.setState({ pageStatus: 'SIGNUP'})
  }

  handleSubmit = (signOut) => {
    if (signOut) {
      this.setState({ pageStatus: 'INITIAL'})
    } else { 
      this.setState({ pageStatus: 'LOGGED_IN'})
    }
  } 

  render() {
    let navDisplay;
    switch(this.state.pageStatus) {
      case ('LOGIN'):
      navDisplay = <Login handleSubmit={this.handleSubmit} />;
      break;
      case ('SIGNUP'):
      navDisplay = <SignUp handleSubmit={this.handleSubmit} />;
      break;
      case ('LOGGED_IN'):
      navDisplay =  <UserAccountBtns name={this.props.user.name} signOutUser={this.props.signOutUser} handleSubmit={this.handleSubmit} />;
      break;
      default:
      navDisplay = <InitialAccountButtons handleLogin={this.handleLogin}  handleSignUp={this.handleSignUp}/>;
      break;
    }
    let userBtns;
    
    return (
      <div>
        {navDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(NavBar)