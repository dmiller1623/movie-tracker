import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { loginUser, populateFavorites } from '../../actions';
import { getUser, getFavorites } from '../../utilities/apiCalls/apiCalls';

import './styles.css';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  submitLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      const cleanEmail = email.trim().toLowerCase();
      const user = await getUser(cleanEmail, password);
      this.props.loginUser(user);
      const userString = JSON.stringify(user);
      localStorage.setItem('user', userString);
      const favorites = await getFavorites(user.id);
      this.props.populateFavorites(favorites);
      this.props.history.push('/');
    } else {
      alert('Please enter both an email and a password');
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.submitLogin}>
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
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  populateFavorites: (favorites) => dispatch(populateFavorites(favorites))
});

export default withRouter(connect(null, mapDispatchToProps)(Login));

const { func, array } = PropTypes;
Login.propTypes = {
  loginUser: func,
  populateFavorites : func,
  history: array
};