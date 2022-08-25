import * as Actiontypes from '../Actiontypes';
const  initilState ={
    counter: 0
} 
export const CountreReducer=(state=initilState, action)=>{
    console.log(action.type, action.payload);
     switch (action.type) {
        case  Actiontypes. COUNTER_INCREIMENT :
            
        return{
            ...state,
            counter:state.counter + 1
        }
        case  Actiontypes.COUNTER_dECREIMENT :
        return{
            ...state,
            counter:state.counter -1
        }
    
        default:
            return state;
    
    }
}