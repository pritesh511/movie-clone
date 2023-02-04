export const searchFilter = (value) => {
  return {
    type: "SEARCH",
    payload: value,
  };
};

export const myList = (item) => {
  return {
    type: "ADD_MY_LIST",
    payload: item,
  };
};

export const setMovieDetailsCard = (item) => {
  return {
    type: "SET_MOVIE_DETAILS",
    payload: item,
  };
};

export const setAnimationDetailsCard = (value) => {
  console.log(value);
  return {
    type: "SET_ANIMATION_DETAILS",
    payload: value,
  };
};
