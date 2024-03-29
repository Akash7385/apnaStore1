import { combineReducers } from "redux";
import { cartReducer } from "./Reducers";

const rootred = combineReducers({
  cartReducer,
});

export default rootred;
