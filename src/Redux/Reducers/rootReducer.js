import { combineReducers } from "redux";

import SearchReducer from "./Search";

const rootReducer = combineReducers({
  Search: SearchReducer,
});

export default rootReducer;
