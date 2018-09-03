import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpUser } from '../../actions';
import { addNewUser, getUser } from '../../utilities/apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  submitSignUp = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    if (name && email && password) {
      const cleanEmail = email.trim().toLowerCase();
      const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
      await addNewUser(capitalName, cleanEmail, password);
      const newUser = await getUser(cleanEmail, password);
      this.props.signUpUser(newUser);
      this.props.history.push('/');
    } else {
      alert('Please enter a name, email, and password');
    }
  }

  render() {
    const { email, password, name } = this.state;

    return (
      <div>
        <form onSubmit={this.submitSignUp}>
          <input
            name='name'
            value={name}
            placeholder='name'
            autoComplete="on"
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            value={email}
            placeholder='email'
            autoComplete="on"
            onChange={this.handleChange}
          />
          <input
            name='password'
            type='password'
            value={password}
            placeholder='password'
            autoComplete="off"
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signUpUser: (user) => dispatch(signUpUser(user))
});

SignUp.propTypes = {
  signUpUser: PropTypes.func,
  history: PropTypes.array
};

export default connect(null, mapDispatchToProps)(SignUp);
