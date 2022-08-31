import { BASE_URL } from '../../shared/BASE_URL';
import * as Actiontypes from '../Actiontypes'
import { addDoc, collection, getDocs, doc, updateDoc, deleteField, deleteDoc } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { async } from '@firebase/util';


export const getDoctor = () => async (dispatch) => {
    try {
        dispatch(loadingDoctor());

        const querySnapshot = await getDocs(collection(db, "Doctor"));
        let data = [];

        querySnapshot.forEach((doc) => {

            data.push({ id: doc.id, ...doc.data() })

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
        const randomStr = Math.floor(Math.random() * 100000).toString();
        const doctorRef = ref(storage, 'Doctor/' + randomStr);
        // console.log(data);
        uploadBytes(doctorRef, data.file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then(async (url) => {
                        const docRef = await addDoc(collection(db, "Doctor"), data = {
                            Degree: data.Degree,
                            Doctorname: data.Doctorname,
                            Aptprice: data.Aptprice,
                            Discription: data.Discription,
                            url: url,
                            filename: randomStr

                        });
                        dispatch({
                            type: Actiontypes.POST_DOCTOR,
                            payload: {
                                id: docRef.id,
                                Degree: data.Degree,
                                Doctorname: data.Doctorname,
                                Aptprice: data.Aptprice,
                                Discription: data.Discription,
                                url: url,
                                filename: randomStr


                            }
                        })
                        // console.log('Uploaded a blob or file!');
                    });
                // dispatch(loadingDoctor());

                // 

            });
    }
    catch (error) {
        dispatch(errorDoctor(error.message))

    }

}

export const deletDoctor = (data) => async (dispatch) => {
    console.log(data);

    try {
        const doctorRef = ref(storage, 'Doctor/' + data.filename);
        deleteObject(doctorRef)
            .then(async () => {
                await deleteDoc(doc(db, "Doctor", data.id));


                dispatch(({ type: Actiontypes.DELET_DOCTOR, payload: data.id }))

            }).catch((error) => {
                dispatch(errorDoctor(error.message))
            });


    }

    catch (error) {
        dispatch(errorDoctor(error.message))

    }

}
export const updetDoctor = (data) => async (dispatch) => {
    console.log(data);
    try {
        const uapdetRef = doc(db, "Doctor", data.id);

        if (typeof data.file === "string") {
            // console.log("only data");
            await updateDoc(uapdetRef, {
                Degree: data.Degree,
                Doctorname: data.Doctorname,
                Aptprice: data.Aptprice,
                Discription: data.Discription,
                // filename: data.filename,
                url: data.url


            });
            dispatch(({
                type: Actiontypes.UPADATE_DOCTOR,
                payload: data
            }))
        }
        else {
            const doctorRef = ref(storage, 'Doctor/' + data.filename);
            deleteObject(doctorRef)
                .then
                (async () => {

                    const randomStr = Math.floor(Math.random() * 100000).toString();
                    const doctorRefint = ref(storage, 'Doctor/' + randomStr);

                    uploadBytes(doctorRefint, data.file)
                        .then((snapshot) => {
                            getDownloadURL(snapshot.ref)
                                .then(async (url) => {
                                    // console.log(url);
                                    await updateDoc(uapdetRef, {
                                        Degree: data.Degree,
                                        Doctorname: data.Doctorname,
                                        Aptprice: data.Aptprice,
                                        Discription: data.Discription,
                                        filename: randomStr,
                                        url: url
                                    });
                                    dispatch({
                                        type: Actiontypes.UPADATE_DOCTOR,
                                        payload: {
                                            ...data,
                                            filename: randomStr,
                                            url: url,


                                        }
                                    })


                                })
                        })



                    // console.log("data with imege");
                })
        }

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
