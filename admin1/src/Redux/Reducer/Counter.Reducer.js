
import * as Actiontypes from '../Actiontypes';
const  initilState ={
    Counter: 0
} 
export const CountreReducer=(state=initilState, action)=>{
   
     switch (action.type) {
        case  Actiontypes. INCREMENT_COUNTER :
            
        return{
            ...state,
            Counter:state.Counter + 1
        }
        case  Actiontypes.DNCREMENT_COUNTER :
        return{
            ...state,
            Counter:state.Counter -1
        }
    
        default:
            return state;
    
    }
}