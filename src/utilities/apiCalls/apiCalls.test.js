import { mockMovieDataFromFetch, movieDataResult } from './mockData'
import { getMovies, getUser, getFavorites, addNewUser, addNewFavorite, deleteFavorite } from './apiCalls';
import apiKey from '../../apiKey.js';


describe('apiCalls', () => {

  describe('getMovies', () => {
    it('fetch should be called with the correct url', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMovieDataFromFetch)
      })); 
      await getMovies();
      expect(window.fetch).toHaveBeenCalledWith(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1`);
    });

    it('should return an array if status code is ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockMovieDataFromFetch)
      }));
      const movieData = await getMovies();

      expect(movieData).toEqual(movieDataResult);
    });

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      
      await expect(getMovies()).rejects.toEqual(errorMessage)
    });

  });

  describe('getUser', () => {
    it('fetch should be called with the correct url', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      }))
      await getUser();

      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/api/users', {
         "body": "{}", "headers": {"Content-Type": "application/json"}, "method": "POST"
      });
    })

    it('should return an array if status code is ok', async () => {
      const email = 'ben@ben.com'
      const password = 'ben'
      const userData = {status: 'success', data: 
      {id: 2, name: 'ben', password: 'ben', email: 'ben@ben.com'} , message: 'Retrieved ONE User'}
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(userData)
      }))
      const userDataResult = await getUser(email, password)
      expect(userDataResult).toEqual(userData.data)
    })

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(getUser()).rejects.toEqual(errorMessage)
    })
  })

  describe('getFavorites', () => {
    it('fetch should be called with the correct url', async () => {
      const userId = 1
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ data: [] })
      }))
      await getFavorites(userId)
      expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3000/api/users/${userId}/favorites`)   
    })

    it('should return an array if status code is ok', async () => {
      const userId = 1
      const favorites = {status: "success", data: [{movie_id: 1}, {movie_id: 2}, {movie_id: 3}], message: "Retrieved All favorites"}
      const expected = [1, 2, 3]
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(favorites)
      }))
      const movieIds = await getFavorites(userId)
      expect(movieIds).toEqual(expected)
    })

    it('should return an empty array if status code is not 200', async () => {
      const userId = 1
      const favorites = {status: "success", data: [{movie_id: 1}, {movie_id: 2}, {movie_id: 3}], message: "Retrieved All favorites"}
      const expected = []
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 404,
        json: () => Promise.resolve(favorites)
      }))
      const movieIds = await getFavorites(userId)
      expect(movieIds).toEqual(expected)
    })

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(getFavorites()).rejects.toEqual(errorMessage)
    })
  })

  describe('addNewUser', () => {
    it('fetch should be called with the correct url', async () => {
      const addNewUserResponse = {id: 20, name: "Laura", password: "laura", email: "laura@laura.com"};
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(addNewUserResponse)
      })) 
      await addNewUser()
      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/api/users/new', {
         "body": "{}", "headers": {"Content-Type": "application/json"}, "method": "POST"
      })
    })

    it('should return an array if status code is ok', async () => {
      const addNewUserResponse = {type: "cors", url: "http://localhost:3000/api/users/new", redirected: false, status: 200, ok: true, statusText: "OK"}
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(addNewUserResponse)
      })) 
      const result = await addNewUser('Laura', 'laura@laura.com', 'laura')
      expect(result).toEqual(addNewUserResponse)
    })

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(addNewUser()).rejects.toEqual(errorMessage)
    })
  })

  describe('addNewFavorite', () => {
    it('fetch should be called with the correct url', async () => {
      const movie = {
        movie_id: 0,
        user_id: 2,
        title: 'title',
        poster_path: 'test.url',
        release_date: '2018-9-2',
        vote_average: 10,
        overview: 'test'
      }
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      })) 
      await addNewFavorite(movie)
      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/api/users/favorites/new', {
        "body": JSON.stringify(movie), "headers": {"Content-Type": "application/json"}, "method": "POST"
     })
    })

    it('should return an array if status code is ok', async () => {
      const movie = {
        movie_id: 0,
        user_id: 2,
        title: 'title',
        poster_path: 'test.url',
        release_date: '2018-9-2',
        vote_average: 10,
        overview: 'test'
      }
      const response = {status: "success", message: "Movie was added to favorites", id: 33};
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      })) 
      const result = await addNewFavorite(movie)
      expect(result).toEqual(response)
    })

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo');
      const movie = {
        movie_id: 0,
        user_id: 2,
        title: 'title',
        poster_path: 'test.url',
        release_date: '2018-9-2',
        vote_average: 10,
        overview: 'test'
      }
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(addNewFavorite(movie)).rejects.toEqual(errorMessage)
    })

  })

  describe('deleteNewFavorite', () => {
    it('fetch should be called with the correct url', async () => {
      const userId = 1;
      const movieId = 2;
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve()
      })) 
      await deleteFavorite(userId, movieId)
      expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3000/api/users/${userId}/favorites/${movieId}`, {
        method: 'DELETE'
      })
    })

    it('should throw an error if the status is not ok', async () => {
      const userId = 1;
      const movieId = 2;
      const errorMessage = new Error('boo');
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage)) 

      await expect(deleteFavorite(userId, movieId)).rejects.toEqual(errorMessage)
    })
  })
})