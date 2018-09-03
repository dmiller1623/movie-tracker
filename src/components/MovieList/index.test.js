import React from 'react';
import { shallow } from 'enzyme';
import { MovieList, mapDispatchToProps } from '../MovieList';
import { addMovies } from '../../actions';

describe('MovieList', () => {

  it('should match the snapshot with no movies', () => {
    const movies = [];
    const wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match the snapshot with one movie', () => {
    const movies = [{
      movie_id: 0,
      title: 'test',
      poster_path: 'test',
      release_date: 2018-9-1,
      vote_average: 1,
      overview: 'test'
    }];
    const wrapper = shallow(<MovieList movies={movies} favorites={movies} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with multiple movies', () => {
    const movies = [{
      movie_id: 0,
      title: 'test1',
      poster_path: 'test1',
      release_date: 2018-9-1,
      vote_average: 1,
      overview: 'test1'
    }, {
      movie_id: 1,
      title: 'test2',
      poster_path: 'test2',
      release_date: 2018-9-1,
      vote_average: 1,
      overview: 'test2'
    }];
    const wrapper = shallow(<MovieList movies={movies} favorites={movies} />);

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should change starColor based on if the movie is included in favorites', () => {
    const movies = [{
      movie_id: 0,
      title: 'test',
      poster_path: 'test',
      release_date: 2018-9-1,
      vote_average: 1,
      overview: 'test'
    }];
    let favorites = [];
    let wrapper = shallow(<MovieList movies={movies} favorites={favorites}/>);
    
    expect(wrapper.find('path').prop('fill')).toEqual('#f2f2f2');

    favorites = [{
      movie_id: 0,
      title: 'test',
      poster_path: 'test',
      release_date: 2018-9-1,
      vote_average: 1,
      overview: 'test'
    }];
    wrapper = shallow(<MovieList movies={movies} favorites={favorites}/>);

    expect(wrapper.find('path').prop('fill')).toEqual('#ffd24d');
  });

  it('should call addresults when button is clicked', async () => {
    const movies = [{
      movie_id: 0,
      title: 'test',
      poster_path: 'test',
      release_date: 2018-9-1,
      vote_average: 1,
      overview: 'test'
    }];
    
    let favorites = [];
    const mockAddMovies = jest.fn();
    let wrapper = shallow(<MovieList movies={movies} favorites={favorites} addMovies={mockAddMovies}/>);
    await wrapper.instance().addResults();
    await expect(mockAddMovies).toHaveBeenCalled();
  });

  describe('matchdispatchtoprops', () => {
    it('should call dispatch when using a function MDTP', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addMovies();

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addMovies();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
