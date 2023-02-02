import { data } from "../../Assets/Data";

const initialState = {
  Movie_List: data,
  MY_List: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        Movie_List: action?.payload
          ? state.Movie_List?.filter((item) => {
              return item?.Title.toLowerCase().match(action.payload);
            })
          : data,
      };
    case "ADD_MY_LIST":
      state.MY_List.push(action.payload);
      return {
        ...state,
        MY_List: state.MY_List,
      };
    default:
      return state;
  }
};

export default SearchReducer;
