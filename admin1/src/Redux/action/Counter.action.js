
import * as Actiontypes from '../Actiontypes';
export const incrementCounter = () => (dispatch) => {
    dispatch({ type: Actiontypes.INCREMENT_COUNTER })
}
export const decrementCounter = () => (dispatch) => {
    dispatch({ type: Actiontypes.DNCREMENT_COUNTER })
}