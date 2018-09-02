import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { loginUser, populateFavorites } from '../../actions';
import { getUser, getFavorites } from '../../utilities/apiCalls/apiCalls';

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
      const cleanEmail = email.trim().toLowerCase()
      const user = await getUser(cleanEmail, password);
      this.props.loginUser(user);
      const userString = JSON.stringify(user);
      localStorage.setItem('user', userString);
      const favorites = await getFavorites(user.id);
      this.props.populateFavorites(favorites);
      this.props.history.push('/');
    } else {
      alert('Please enter both email and password');
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
            onChange={this.handleChange}
          />
          <input
            name='password'
            value={password}
            placeholder='password'
            onChange={this.handleChange}
          />
          <button>Submit</button>
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

Login.propTypes = {
  loginUser: PropTypes.func,
  populateFavorites : PropTypes.func,
  history: PropTypes.object
}