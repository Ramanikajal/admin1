import * as Actiontypes from '../Actiontypes';

const initialState = {
    isLoading: false,
    Doctor: [],
    error: ''

}

export const DoctorReducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state)
    switch (action.type) {
        case Actiontypes.LOADING_DOCTOR:
            return {
                ...state,
                isLoading: true,
                // Doctor : [],
                error: ''
            }
        case Actiontypes.GET_DOCTOR:
            return {
                ...state,
                isLoading: false,
                Doctor: action.payload,
                error: ''
            }
        case Actiontypes.ERROR_DOCTOR:
            return {
                ...state,
                isLoading: false,
                Doctor: [],
                error: action.payload
            }
        case Actiontypes.POST_DOCTOR:
            return {
                ...state,
                isLoading: false,
                Doctor: state.Doctor.concat(action.payload),
                error: ''
            }
        case Actiontypes.DELET_DOCTOR:
            return {
                ...state,
                isLoading: false,
                Doctor: state.Doctor.filter((d) => d.id !== action.payload),
                error: ''
            }
        case Actiontypes.UPADATE_DOCTOR:
            return {
                ...state,
                isLoading: false,
                Doctor: state.Doctor.map((l) => {
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