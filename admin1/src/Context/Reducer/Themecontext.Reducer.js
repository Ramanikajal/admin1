import { ActionTypes } from "../Actiontype"
export const ThemeReducer =( state, action) => {
     switch (action.type) {
        case  ActionTypes.TOOGLE_THEME:
            return{
                ...state,
                theme: action.payload
            }
            
         
     
        default: state
     }
}

