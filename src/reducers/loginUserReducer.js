import { getUser } from '../utilities/apiCalls/apiCalls';

export const loginUserReducer = async (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
    console.log('hi');
      return await getUser(action.email, action.password);
    default:
      return state;
  }
};