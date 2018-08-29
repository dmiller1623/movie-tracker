import React, { Component } from 'react';

export default class Login extends Component {
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

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={(event) => this.props.submitLogin(event, email, password)}>
          <input
            name='email'
            value={this.state.email}
            placeholder='email address'
            onChange={(event) => this.handleChange(event)}
          />
          <input
            name='password'
            value={this.state.password}
            placeholder='Password'
            onChange={(event) => this.handleChange(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}