import { userReducer } from './userReducer'
import * as actions from '../actions'

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    
    const results = userReducer(undefined, {})

    expect(results).toEqual(expected)
  })

  it('should return the state with the user that logged in', () => {
    const user = {
      email: 'dm@aol.com',
      id:1,
      name: 'Dennis',
      password: 'password'
    }

    const results = userReducer(undefined, actions.loginUser(user))

    expect(results).toEqual(user)
  })

  it('should return a default state when signing out', () => {
    const initialState = {
      email: 'dm@aol.com',
      id:1,
      name: 'Dennis',
      password: 'password'
    }

    const expected = {}
    
    const results = userReducer(initialState, actions.signOutUser())

    expect(results).toEqual(expected)
  })

  it('should return the state with a new user', () => {
    const user = {
      email: 'dm@aol.com',
      id:1,
      name: 'Dennis',
      password: 'password'
    }

    const results = userReducer(undefined, actions.signUpUser(user))

    expect(results).toEqual(user)
  })
})