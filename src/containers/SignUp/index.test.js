import React from 'react'
// import SignUp from '/SignUp'
import { mapDispatchToProps } from './index.js'
import { signUpUser } from '../../actions'
import { shallow } from 'enzyme'

describe('SignUp', () => {
  let wrapper
  describe('SignUp component', () => {
    // wrapper =shallow(<SignUp />) 
  })

  describe('matchdispatchtoprops', () => {
    it('should call dispatch when using a function MDTP', () => {
      const user = {
        email: 'dm@aol.com',
        id:1,
        name: 'Dennis',
        password: 'password'
      }

      const mockDispatch = jest.fn()
      const actionToDispatch = signUpUser(user)

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.signUpUser(user)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
  })
})