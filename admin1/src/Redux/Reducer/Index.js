import { combineReducers } from "redux";
import { CountreReducer } from "./Counter.Reducer";
// import { CountreReducer } from "../Counter.Reducer";


export const rootReducer = combineReducers({
    Counter: CountreReducer
})
