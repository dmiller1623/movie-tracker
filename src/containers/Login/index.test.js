import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from '../Login';
import { loginUser, populateFavorites } from '../../actions';


describe('Login', () => {
  let wrapper;
  const mockUser = {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"}
  describe('Login component', () => {

  })
  describe('mapDispatchToProps', () => {
    it('should call dispatch when using a function loginUser', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser(mockUser);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.loginUser(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
    it('should call dispatch when using a function populateFavorites', () => {
      const mockFavorites = [0, 1, 2];

      const mockDispatch = jest.fn();
      const actionToDispatch = populateFavorites(mockFavorites);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateFavorites(mockFavorites);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  })
})