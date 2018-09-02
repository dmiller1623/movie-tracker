import React from 'react'
import { shallow, mount } from 'enzyme'
import {  NavBar, mapStateToProps, mapDispatchToProps } from '../NavBar'
import { signOutUser } from '../../actions'
import { InitialAccountButtons } from '../../components/InitialAccountButtons';
import UserAccountBtns from '../../components/UserAccountBtns';

describe('NavBar', () => {
  describe('NavBar component', () => {
    let wrapper
    it('shouls match the snapshot', () => {
      const user= {
        name: 'Dennis',
        email: 'dmill@aol.com',
        password: 'password'
      }
      wrapper = shallow(<NavBar user={user}/>)
      expect(wrapper).toMatchSnapshot()
    })

    it('should call the function signOutUser when handle sign out is ran', () => {
      const history = []
      const mockSignOut = jest.fn()
      const user= {
        name: 'Dennis',
        email: 'dmill@aol.com',
        password: 'password'
      }
      wrapper = shallow(<NavBar user={user} signOutUser={mockSignOut} history={history}/>)
      wrapper.instance().handleSignOut()
      expect(mockSignOut).toHaveBeenCalled()
    })

    it('should render user account buttons if a user is signed in', () =>{
      const user = {
        name: 'dennis'
      }
      wrapper = shallow(<NavBar user={user}/>)
      expect(wrapper.find(UserAccountBtns).length).toEqual(1)
    })

    it('should render initial account buttons if no user is signed in', () => {
      const user = {}

      wrapper = shallow(<NavBar user={user}/>)
      expect(wrapper.find(InitialAccountButtons).length).toEqual(1)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function MDTP', () => {

      const mockDispatch = jest.fn()
      const actionToDispatch = signOutUser()

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.signOutUser()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)

    })
  })

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {
        user: {},
        favorites: []
      }
      const expected = {
        user: {}
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})