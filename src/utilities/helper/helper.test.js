import { mockMovieDataFromFetch, movieDataResult } from "../apiCalls/mockData";
import cleanData from './helper';

describe('getMovies', () => {

  it('should return an array of movie objects', async () => {
    const cleanedMovieData = cleanData(mockMovieDataFromFetch);
    expect(cleanedMovieData).toEqual(movieDataResult);
  });

});