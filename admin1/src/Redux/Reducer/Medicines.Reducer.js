
import * as Actiontypes from '../Actiontypes';

const initialState={
    isLoading: false,
    Medicines:[],
    error: ''
    
}

export const MedicinesReducer=(state=initialState,action) =>{
    console.log(action.type,action.payload);

    switch (action.type) {
        // case Actiontypes.LOADING_MEDICIENS:
        //     return{
        //         ...state,
        //         isLoading:true,
        //         Medicines: [],
        //         error:''
        //     }
        case Actiontypes.GET_MEDICINES:
            return{
                ...state,
                isLoading:false,
                Medicines: action.payload,
                error:''
            }
            // case Actiontypes.ERROR_MEDICIENS:
            // return{
            //     ...state,
            //     isLoading:false,
            //     Medicines: action.payload,
            //     error:''
            // }
    
        default:
            return state;
    }

}