export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user
    case 'SIGN_OUT':
      return {}
    case 'SIGN_UP_USER':
      return action.user
    default:
      return state;
  }
};