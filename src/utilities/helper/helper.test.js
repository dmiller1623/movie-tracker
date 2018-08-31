import { mockMovieDataFromFetch, movieDataResult } from "../apiCalls/mockData";
import cleanData from './helper';

jest.mock('../apiCalls/apiCalls.js');

describe('getMovies', () => {

  it('should return an array of movie objects', async () => {
    const cleanedMovieData = cleanData(mockMovieDataFromFetch);
    expect(cleanedMovieData).toEqual(movieDataResult);
  });

});