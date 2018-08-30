import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import UserAccountBtns from '../../components/UserAccountBtns';
import { signOutUser } from '../../actions';

class NavBar extends Component {
  handleSignOut = () => {
    this.props.signOutUser();
    this.props.history.push('/');
  }

  render() {
    const { name } = this.props.user;
    const navDisplay = name ? 
      <UserAccountBtns name={name} handleSignOut={this.handleSignOut}/> :
      <InitialAccountButtons />;
    
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
