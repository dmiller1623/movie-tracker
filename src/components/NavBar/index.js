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
      userIsLoggingIn: false,
      userSigningUp: false
    };
  }
  
  handleLogin = () => {
    this.setState({ userIsLoggingIn: true });
  }

  handleSignUp = () => {
    this.setState({ userSigningUp: true });
  }

  handleSubmit = () => {
    this.setState({ userIsLoggingIn: false })
  } 

  render() {
    return (
      <div>
        {!this.state.userIsLoggingIn && !this.props.user.name && <InitialAccountButtons handleLogin={this.handleLogin}  handleSignUp={this.handleSignUp}/> }
        {this.state.userIsLoggingIn && <Login handleSubmit={this.handleSubmit} /> }
        {this.state.userSigningUp && <SignUp handleSignUp = {this.handleSignUp}/>}
        {this.props.user.name && <UserAccountBtns 
          name={this.props.user.name}
          handleSignOut={this.props.signOutUser}/>}
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)