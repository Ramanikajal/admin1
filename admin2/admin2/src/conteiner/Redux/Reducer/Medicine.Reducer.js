import * as Actiontypes from '../Actiontypes';

const initialState = {
    isLoading: false,
    Medicine: [],
    error: ''

}

export const MedicinesReducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state)
    switch (action.type) {
       
        case Actiontypes.GET_MEDICINE:
            return {
                ...state,
                isLoading: false,
                Medicine: action.payload,
                error: ''
            }
            default:
                return state;
        }
}