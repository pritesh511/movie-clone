import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsReducer";
import SearchReducer from "./Search";

const rootReducer = combineReducers({
  Search: SearchReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
