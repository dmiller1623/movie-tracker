import React from 'react'
import { shallow, mount } from 'enzyme'
import {  SignUp, mapDispatchToProps } from '../SignUp'
import { signUpUser } from '../../actions'


describe('SignUp', () => {
  let wrapper
  describe('SignUp component', () => {
    wrapper = mount(<SignUp />)
    it('should update state when user enters something in an input', () => {

    })
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