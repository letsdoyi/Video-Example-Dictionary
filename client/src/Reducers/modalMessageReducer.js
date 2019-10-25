function modalMessageReducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE_MODAL_MESSAGE':
      return action.data;

    default:
      return state;
  }
}
export default modalMessageReducer;
