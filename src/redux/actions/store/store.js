import { legacy_createStore } from "redux";
import todoReducers from "../reducers/reducers";

const store =legacy_createStore(todoReducers)
export default store;