import React, { Component } from 'react';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import UserAccountBtns from '../UserAccountBtns';
import { signOutUser } from '../../actions';

class NavBar extends Component {
  handleSignOut = () => {
    this.props.signOutUser();
    this.props.history.push('/')
  }

  render() {
    let navDisplay;

    if (this.props.user.name) {
      navDisplay =  <UserAccountBtns name={this.props.user.name} handleSignOut={this.handleSignOut}/>;
    } else {
      navDisplay = <InitialAccountButtons />;
    }
    
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(NavBar))