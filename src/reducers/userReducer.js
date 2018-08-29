
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user
    case 'SIGN_OUT':
      return {}
    default:
      return state;
  }
};