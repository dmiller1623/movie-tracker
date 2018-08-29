import React, { Component } from 'react';
import Login from '../../containers/Login';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import { connect } from 'react-redux'
import SignOutBtn from '../SignOutBtn';
import { signOutUser } from '../../actions';



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

  handleSubmit = () => {
    this.setState({ userIsLoggingIn: false })
  } 

  render() {
    return (
      <div>
        {!this.state.userIsLoggingIn && !this.props.user.name && <InitialAccountButtons handleLogin={this.handleLogin} /> }
        {this.state.userIsLoggingIn && <Login handleSubmit={this.handleSubmit} /> }
        {this.props.user.name && <SignOutBtn handleSignOut={this.props.signOutUser}/>}
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