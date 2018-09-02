import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps } from '../Login';
import { loginUser, populateFavorites } from '../../actions';
import { getUser, getFavorites } from '../../utilities/apiCalls/apiCalls';

jest.mock('../../utilities/apiCalls/apiCalls.js');

describe('Login', () => {
  let wrapper;
  const mockUser = {id: 1, name: "Taylor", password: "password", email: "tman2272@aol.com"};
  describe('Login component', () => {
    wrapper = shallow(<Login />);
    const loginUser = jest.fn();
    const populateFavorites = jest.fn();

    it('should start with default state values', () => {

      expect(wrapper.state('email')).toEqual('');
      expect(wrapper.state('password')).toEqual('');
    });

    it('should change the value of the state object when user inputs information', () => {

      const mockEvent1 = {preventDefault: jest.fn(), target: {name: 'email', value: 'b'}};

      wrapper.find('input').first().simulate('change', mockEvent1);

      expect(wrapper.state('email')).toEqual('b');

      const mockEvent2 = {preventDefault: jest.fn(), target: {name: 'password', value: 'password'}};

      wrapper.find('input').last().simulate('change', mockEvent2);

      expect(wrapper.state('password')).toEqual('password');
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should give an alert if login is submitted without login & password', () => {
      const mockEvent = {preventDefault: jest.fn()};

      wrapper.setState({email: 'ben@ben.com', password: ''});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(getUser).not.toHaveBeenCalled();

      wrapper.setState({email: '', password: 'password'});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(getUser).not.toHaveBeenCalled();

      wrapper.setState({email: '', password: ''});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(getUser).not.toHaveBeenCalled();

    });
    it('should call getUser with the correct params when login is submitted', () => {
      const mockEvent = {preventDefault: jest.fn()};

      wrapper = shallow(<Login loginUser={loginUser} populateFavorites={jest.fn()} history={[]}/>);

      wrapper.setState({email: 'ben@ben.com', password: 'password'});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(getUser).toHaveBeenCalledWith('ben@ben.com', 'password');
    });
    it('should call loginUser when login is submitted', () => {
      const mockEvent = {preventDefault: jest.fn()};

      wrapper = shallow(<Login loginUser={loginUser} populateFavorites={jest.fn()} history={[]}/>);

      wrapper.setState({email: 'ben@ben.com', password: 'password'});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(loginUser).toHaveBeenCalled();
    });
    it('should call getFavorites when login is submitted', () => {
      const mockEvent = {preventDefault: jest.fn()};

      wrapper = shallow(<Login loginUser={loginUser} populateFavorites={populateFavorites} history={[]}/>);

      wrapper.setState({email: 'ben@ben.com', password: 'password'});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(getFavorites).toHaveBeenCalled();
    });
    it('should call populateFavorites when login is submitted', () => {
      const mockEvent = {preventDefault: jest.fn()};

      wrapper = shallow(<Login loginUser={loginUser} populateFavorites={populateFavorites} history={[]}/>);

      wrapper.setState({email: 'ben@ben.com', password: 'password'});

      wrapper.find('form').simulate('submit', mockEvent);

      expect(populateFavorites).toHaveBeenCalled();
    });
  });
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
  });
});