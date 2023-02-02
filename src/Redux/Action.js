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
