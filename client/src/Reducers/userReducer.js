const initialState = null;

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.data

    default:
      return state;
  }
}
export default userReducer;
