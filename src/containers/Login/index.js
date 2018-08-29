import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';
import { getUser } from '../../utilities/apiCalls/apiCalls';


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
    if(email && password) {
    const cleanEmail = email.trim().toLowerCase()
    const user = await getUser(cleanEmail, password)
    this.props.loginUser(user);
    } else {
      alert('Please enter both email and password')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submitLogin(event)}>
          <input
            type="email"
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

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser(email, password))
});

export default connect(null, mapDispatchToProps)(Login)