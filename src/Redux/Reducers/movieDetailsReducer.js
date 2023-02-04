const initialState = {
  MY_DATA: null,
  ANIMATION: false,
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMATION_DETAILS":
      return {
        ANIMATION: action.payload,
      };
    case "SET_MOVIE_DETAILS":
      return {
        ...state,
        MY_DATA: action.payload,
      };
    default:
      return state;
  }
};

export default movieDetailsReducer;
