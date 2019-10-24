const initialState = {
  startTimeSeconds: 0,
  durationMilliseconds: 100000,
  current: 'play',
  currentTime: 0,
  order: 0,
};

function videoStateReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVE_VIDEO_START_TIME':
      return {
        ...state,
        startTimeSeconds: action.data.time,
        durationMilliseconds: action.data.duration * 1000,
      };

    case 'UPDATE_CURRENT_VALUE':
      return {
        ...state,
        current: action.data,
      };

    case 'UPDATE_CURRENT_TIME':
      return {
        ...state,
        currentTime: action.data,
      };

    case 'UPDATE_VIDEO_ORDER':
      return {
        ...state,
        order: state.order + action.data,
      };

    default:
      return {
        ...state,
      };
  }
}

export default videoStateReducer;
