import * as Actiontypes from '../Actiontypes';

const initialState = {
    isLoading: false,
    Medicines: [],
    error: ''

}

export const MedicinesReducer = (state = initialState, action) => {
    // console.log(action.type, action.payload, state)
    switch (action.type) {
        case Actiontypes.LOADING_MEDICIENS:
            return {
                ...state,
                isLoading: true,
                // Medicines : [],
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
        case Actiontypes.POST_MEDICIENS:
            return {
                ...state,
                isLoading: false,
                Medicines: state.Medicines.concat(action.payload),
                error: ''
            }
        case Actiontypes.DELET_MEDICIENS:
            return {
                ...state,
                isLoading: false,
                Medicines: state.Medicines.filter((d) => d.id !== action.payload),
                error: ''
            }
        case Actiontypes.UPADATE_MEDICINE:
            return {
                ...state,
                isLoading: false,
                Medicines: state.Medicines.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    } else {
                        return l
                    }
                }),
                error: ''
            }

        default:
            return state;
    }

}