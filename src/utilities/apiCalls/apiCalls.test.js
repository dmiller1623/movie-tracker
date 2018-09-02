import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockMovieDataFromFetch, movieDataResult } from './mockData'
import { getMovies, getUser, getFavorites } from './apiCalls';
import apiKey from '../../apiKey.js';


describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockMovieDataFromFetch)
    })) 
  })
  describe('getMovies', () => {
    it('fetch should be called with the correct url', async () => {
      await getMovies()
      expect(window.fetch).toHaveBeenCalledWith(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878&language=en-US&sort_by=revenue.asc&include_adult=false&include_video=false&page=1`)
    })

    it('should return an array if status code is ok', async () => {
      const movieData = await getMovies()
      expect(movieData).toEqual(movieDataResult)
    })

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(getMovies()).rejects.toEqual(errorMessage)
    })
  })

  describe('getUser', () => {
    it('fetch should be called with the correct url', async () => {
      await getUser()
      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3000/api/users', {
         "body": "{}", "headers": {"Content-Type": "application/json"}, "method": "POST"
      })
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

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(getFavorites()).rejects.toEqual(errorMessage)
    })
  })

  describe('addNewUser', () => {
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

    it('should throw an error if the status is not ok', async () => {
      const errorMessage = new Error('boo')
      window.fetch = jest.fn().mockImplementation(() => Promise.reject(errorMessage))
      await expect(getFavorites()).rejects.toEqual(errorMessage)
    })
  })

  describe('addNewFavorite', () => {

  })

  describe('deleteNewFavorite', () => {

  })
})