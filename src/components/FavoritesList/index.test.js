import React from 'react';
import FavoritesList from '../FavoritesList';
import { shallow } from 'enzyme';

describe('FavoritesList', ()=> {
  const mockMovies = [
    {movie_id: 2, title: "Hotori - The Simple Wish for Joy", poster_path: "/qIODP7buZlHBbbs6PNlQxb4orHo.jpg", release_date: "2005-08-28", vote_average: 10},
    {movie_id: 3, title: "Big Meat Eater", poster_path: "/gimNITXaKUevTsbXNUFEI6bCqro.jpg", release_date: "1982-04-30", vote_average: 10}
  ];
  it('should match the snapshot if there are favorites to display', () => {
    
    let wrapper = shallow(<FavoritesList movies={mockMovies} favorites={[2]}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if there are no favorites to display', () => {
    
    let wrapper = shallow(<FavoritesList movies={mockMovies} favorites={[]}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
