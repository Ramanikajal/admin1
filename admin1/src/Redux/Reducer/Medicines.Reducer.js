import * as Actiontypes from '../Actiontypes';

const initialState = {
    isLoading: false,
    Medicines: [],
    error: ''

}

export const MedicinesReducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state)
    switch (action.type) {
        case Actiontypes.LOADING_MEDICIENS:
            return {
                ...state,
                isLoading: true,
                Medicines : [],
                error: ''
            }
        case Actiontypes.GET_MEDICINE:
            return {
                ...state,
                isLoading: false,
                Medicines: action.payload,
                error: ''
            }
        case Actiontypes.ERROR_MEDICIENS:
            return {
                ...state,
                isLoading: false,
                Medicines: [],
                error: action.payload
            }

        default:
            return state;
    }

}