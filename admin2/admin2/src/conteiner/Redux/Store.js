import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { RootReducer } from "./Reducer"

export const configureStore =() => {
    let store = createStore(RootReducer, applyMiddleware(thunk))
    return store
}
