import { BASE_URL } from '../../shared/BASE_URL';
import * as Actiontypes from '../Actiontypes'
import { addDoc, collection, getDocs, doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';


export const getDoctor = () => async (dispatch) => {
    try {
        dispatch(loadingDoctor());

        const querySnapshot = await getDocs(collection(db, "Doctor"));
        let data = [];

        querySnapshot.forEach((doc) => {

            data.push({ id: doc.id, ...doc.data() })
            // dispatch(({ type: Actiontypes.GET_DOCTOR, payload: data}))
            // console.log(`${doc.id} => ${doc.data()}`);
        });

        dispatch(({ type: Actiontypes.GET_DOCTOR, payload: data }))

    }
    catch (error) {
        dispatch(errorDoctor(error.message))

    }

}
export const addDoctor = (data) => async (dispatch) => {
    try {
        dispatch(loadingDoctor());
        const docRef = await addDoc(collection(db, "Doctor"), data);
        dispatch({ type: Actiontypes.POST_DOCTOR, payload: { id: docRef.id, ...data } })

    }
    catch (error) {
        dispatch(errorDoctor(error.message))

    }

}
export const deletDoctor = (id) => async (dispatch) => {
    console.log(id);
    try {
        await deleteDoc(doc(db, "Doctor", id));


        dispatch(({ type: Actiontypes.DELET_DOCTOR, payload: id }))
    }

    catch (error) {
        dispatch(errorDoctor(error.message))

    }

}
export const updetDoctor = (data) => async(dispatch) => {
    try {
        const uapdetRef = doc(db, "Doctor", data.id);

        await updateDoc(uapdetRef, {

            Degree:data.Degree,
            Doctorname:data.Doctorname,
            Aptprice:data.Aptprice,
            Discription:data.Discription
        });
        dispatch(({ type: Actiontypes.UPADATE_DOCTOR, payload: data }))
    }
    catch (error) {
        dispatch(errorDoctor(error.message))

    }

}
export const loadingDoctor = () => (dispatch) => {
    dispatch({ type: Actiontypes.LOADING_MEDICIENS })

}
export const errorDoctor = (error) => (dispatch) => {
    dispatch({ type: Actiontypes.ERROR_DOCTOR, payload: error })

}
