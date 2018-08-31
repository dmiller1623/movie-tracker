import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signUpUser } from '../../actions';
import { addNewUser } from '../../utilities/apiCalls/apiCalls';

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
    const cleanEmail = email.trim().toLowerCase();
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
    const newUser = await addNewUser(capitalName, cleanEmail, password);

    this.props.signUpUser(newUser);
    this.props.history.push('/');
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
            onChange={this.handleChange}
          />
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
  signUpUser: (user) => dispatch(signUpUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
