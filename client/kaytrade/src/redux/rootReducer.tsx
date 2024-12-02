import { combineReducers } from "redux";
import themeReducer from "./reducers/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
