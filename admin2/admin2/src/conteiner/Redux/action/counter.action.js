import * as Actiontypes  from"../Actiontypes"

export const  incrementAction = () => (dispatch) => {
    console.log("incrementAction");
    dispatch({ type: Actiontypes.COUNTER_INCREIMENT })

}
export const  decrementAction=()=> (dispatch) =>{
    dispatch({ type: Actiontypes.COUNTER_dECREIMENT })
}

