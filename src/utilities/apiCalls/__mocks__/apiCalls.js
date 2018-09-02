// export const getMovies = jest.fn().mockImplementation(() => ({}));

export const getUser = jest.fn().mockImplementation(() => ({status: 'success', data: 
  {id: 2, name: 'ben', password: 'ben', email: 'ben@ben.com'} , message: 'Retrieved ONE User'}));

export const getFavorites = jest.fn().mockImplementation(() => ({}));

export const addNewUser = jest.fn().mockImplementation(() => ({}));

export const addNewFavorite = jest.fn().mockImplementation(() => ({}));

export const deleteFavorite = jest.fn().mockImplementation(() => ({}));