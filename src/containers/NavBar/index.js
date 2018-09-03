import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { InitialAccountBtns } from '../../components/InitialAccountBtns';
import UserAccountBtns from '../../components/UserAccountBtns';
import { signOutUser } from '../../actions';
import PropTypes from 'prop-types';

import './styles.css';

export class NavBar extends Component {
  handleSignOut = () => {
    this.props.signOutUser();
    localStorage.clear();
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

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser())
});

NavBar.propTypes = {
  signOutUser: PropTypes.func,
  user: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
