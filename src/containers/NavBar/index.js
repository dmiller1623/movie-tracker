import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { InitialAccountBtns } from '../../components/InitialAccountBtns';
import UserAccountBtns from '../../components/UserAccountBtns';
import { signOutUser } from '../../actions';

import './styles.css';

class NavBar extends Component {
  handleSignOut = () => {
    this.props.signOutUser();
    this.props.history.push('/');
  }

  render() {
    const { name } = this.props.user;
    const navDisplay = name ? 
      <UserAccountBtns name={name} handleSignOut={this.handleSignOut}/> :
      <InitialAccountBtns />;
    
    return (
      <nav>
        {navDisplay}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
