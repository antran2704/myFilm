import { combineReducers } from "redux";
import reducerMovie from "./reducerMovie";

const rootReducer = combineReducers({
  movie: reducerMovie,
});

export default rootReducer;
