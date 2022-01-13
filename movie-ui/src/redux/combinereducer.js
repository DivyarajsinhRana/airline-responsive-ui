import { combineReducers } from "redux";
import { airlinereducer } from "./reducers/airlinereducer";

export const rootreducer =combineReducers({
    airline : airlinereducer 
})