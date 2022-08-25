import { combineReducers } from "redux";
import { CountreReducer } from "./Counter.Reducer";
import { MedicinesReducer } from "./Medicine.Reducer";

export const RootReducer= combineReducers({
    counter: CountreReducer,
    Medicine: MedicinesReducer
})