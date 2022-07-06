import { BASE_URL } from '../../shared/BASE_URL';
import * as Actiontypes from '../Actiontypes';

export const getMedicines = () => (dispatch) => {
    try {
        fetch( BASE_URL + "Medicines")
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
            .then(Medicines => dispatch(({ type: Actiontypes.GET_MEDICINES, payload: Medicines })))
            // .catch(error => dispatch(medicinesFailed(error.message)));
            .catch( error =>console.log(error));
    }catch(error){
        console.log(error);
    }
}