import { BASE_URL } from '../../shared/BASE_URL';
import * as Actiontypes from '../Actiontypes';

export const getMedicines = () => (dispatch) => {
   
    try {
        dispatch(loadingMediciens());
        setTimeout(function()  {
           fetch( BASE_URL + "Medicine")
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error("Error " + response.status + ":" + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(Medicines => dispatch(({ type: Actiontypes.GET_MEDICINE, payload: Medicines })))
            // .catch(error => dispatch(MedicinesFailed(error.message)));
            // .catch( error => console.log(error));
            .catch((error)=>dispatch(errorMedicines(error.message)));   
        }, 2000);
       
    }catch(error){
        // console.log(error);;
        dispatch(errorMedicines(error.message))
    }
}
export const loadingMediciens= () => (dispatch) =>{
    dispatch({type:Actiontypes.LOADING_MEDICIENS})

}
export const errorMedicines = (error) => (dispatch) =>{
    dispatch({type: Actiontypes.ERROR_MEDICIENS, payload : error})

}

