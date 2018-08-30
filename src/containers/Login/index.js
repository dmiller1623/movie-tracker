import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, populateFavorites } from '../../actions';
import { getUser, getFavorites } from '../../utilities/apiCalls/apiCalls';
import { withRouter } from 'react-router-dom';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      const cleanEmail = email.trim().toLowerCase()
      const user = await getUser(cleanEmail, password);
      this.props.loginUser(user);
      const favorites = await getFavorites(user.id);
      this.props.populateFavorites(favorites);
      this.props.history.push('/')
    } else {
      alert('Please enter both email and password')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submitLogin(event)}>
          <input
            type='email'
            name='email'
            value={this.state.email}
            placeholder='email'
            onChange={(event) => this.handleChange(event)}
          />
          <input
            name='password'
            value={this.state.password}
            placeholder='password'
            onChange={(event) => this.handleChange(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  populateFavorites: (favorites) => dispatch(populateFavorites(favorites))
});

export default withRouter(connect(null, mapDispatchToProps)(Login))