import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions';
import { addNewUser } from '../../utilities/apiCalls/apiCalls';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitSignUp = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const cleanEmail = email.trim().toLowerCase();
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
    const newUser = await addNewUser(capitalName, cleanEmail, password);
    this.props.signUpUser(newUser);
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitSignUp}>
          <input
            name='name'
            value={this.state.name}
            placeholder='name'
            onChange={(event) => this.handleChange(event)}
          />
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
  signUpUser: (user) => dispatch(signUpUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp)