import React from 'react'
import { shallow, mount } from 'enzyme'
import {  SignUp, mapDispatchToProps } from '../SignUp'
import { signUpUser } from '../../actions'


describe('SignUp', () => {
  let wrapper
  describe('SignUp component', () => {
    wrapper = mount(<SignUp />)

    it('should match the snapshot', () => {
      wrapper = shallow(<SignUp />)
      expect(wrapper).toMatchSnapshot()
    })
    it('should update state when user enters something in the name input', () => {
      const mockEvent = { target: { value: 'Dennis', name: 'name' } }
      const expectedState = {
        name: 'Dennis',
        email: '', 
        password: ''
      };
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state()).toEqual(expectedState);
    })

    it('should update state when user enters something in the email input', () => {
      const mockEvent = { target: { value: 'dmill@aol.com', name: 'email' } }
      const expectedState = {
        name: 'Dennis',
        email: 'dmill@aol.com', 
        password: ''
      };
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state()).toEqual(expectedState);
    })

    it('should update state when user enters something in the paswword input', () => {
      const mockEvent = { target: { value: 'password', name: 'password' } }
      const expectedState = {
        name: 'Dennis',
        email: 'dmill@aol.com', 
        password: 'password'
      };
      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state()).toEqual(expectedState);
    })

    it('should call submitSignUp on form submit', async () => {
      window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true, 
        json: () => Promise.resolve({ name:'Dennis', email:'dm@aol.com', password:'password' })
      }));
      const mockEvent = { preventDefault: jest.fn() }
      const mockSignUp = jest.fn()
      const history = []
      wrapper = shallow(<SignUp signUpUser={mockSignUp} history={history}/>)
      await wrapper.instance().submitSignUp(mockEvent)
      expect(mockSignUp).toHaveBeenCalled()
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