import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter, MemoryRouter} from 'react-router-dom';

import { Login } from '../Login';
import { App, mapStateToProps, mapDispatchToProps } from './App.js';
import { populateMovies } from '../../actions';


describe('App', () => {

  describe('App component', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(
      <BrowserRouter>
        <App />
      </BrowserRouter>);
  
      expect(wrapper).toMatchSnapshot();
    });

    it.skip('should populate movies on componentDidMount', async () => {
      const mockPopulateMovies = jest.fn();
      const wrapper = await shallow(
        <BrowserRouter>
          <App populateMovies={mockPopulateMovies}/>
        </BrowserRouter>);
      await wrapper.update();

      expect(mockPopulateMovies).toHaveBeenCalled();
    });

    it.skip('should check for user in locale storage on componentDidMount and login user if there is one', () => {
      let wrapper = shallow(<App />);
      expect(wrapper.state('user')).toEqual(undefined);
      const user = {name: 'test'};
  
      localStorage.setItem('user', JSON.stringify(user));
      wrapper = shallow(<App />);
  
      expect(wrapper.state('user')).toEqual({name: 'test'});
    });

    it.skip('should render a login component', () => {
      const wrapper = shallow(
        <MemoryRouter initialEntries={['/login']}>
          <App />
        </MemoryRouter>);

      expect(wrapper.find('Login')).toHaveLength(1);
    });
  });

  describe('matchStateToProps', () => {
    it('should return an object with a movies and favorites array', () => {
      const mockState = {
        movies: [{
          movie_id: 0,
          title: 'test',
          poster_path: 'test',
          release_date: 2018-9-1,
          vote_average: 1,
          overview: 'test'
        }],
        favorites: [0]
      };
      const expected = {
        movies: [{
          movie_id: 0,
          title: 'test',
          poster_path: 'test',
          release_date: 2018-9-1,
          vote_average: 1,
          overview: 'test'
        }],
        favorites: [0]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('matchDispatchToProps', () => {
    it('should call dispatch when using a function MDTP', () => {
      const movies = [{
        movie_id: 0,
        title: 'test',
        poster_path: 'test',
        release_date: 2018-9-1,
        vote_average: 1,
        overview: 'test'
      }];
      const mockDispatch = jest.fn();
      const actionToDispatch = populateMovies(movies);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.populateMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
