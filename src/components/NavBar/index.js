import React, { Component } from 'react';
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import { connect } from 'react-redux'
import UserAccountBtns from '../UserAccountBtns';
import { signOutUser } from '../../actions';



class NavBar extends Component {
  render() {
    let navDisplay;

    if (this.props.user.name) {
      navDisplay =  <UserAccountBtns name={this.props.user.name} signOutUser={this.props.signOutUser}/>;
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

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(NavBar)