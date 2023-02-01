import { data } from "../../Assets/Data";

const initialState = {
  Movie_List: data,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state.Movie_List,
        Movie_List: action?.payload
          ? state.Movie_List?.filter((item) => {
              return item?.Title.toLowerCase().match(action.payload);
            })
          : data,
      };
    default:
      return state;
  }
};

export default SearchReducer;
