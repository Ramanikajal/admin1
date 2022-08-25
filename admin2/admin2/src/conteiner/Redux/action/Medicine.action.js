

import * as Actiontypes from '../Actiontypes'
export const getMedicinesAction = () => (dispatch) => {

    try {
        fetch("http://localhost:3004/Medicine")
        .then((response) => response.json())
        .then(Medicine=> dispatch(({ type: Actiontypes.GET_MEDICINE, payload: Medicine })))

    }
    catch (error) {
        console.log(error);;
        dispatch((error.message))
    }
}