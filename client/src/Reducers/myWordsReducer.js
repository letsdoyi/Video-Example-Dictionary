function myWordsReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_WORD':
      if (!state[action.data.word]) {
        return {
          ...state,
          [action.data.word]:action.data
        };
      } else {
        return {...state};
      }

    default:
      return {
        ...state
      };
  }
}
export default myWordsReducer;
