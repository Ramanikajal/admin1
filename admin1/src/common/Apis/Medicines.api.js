import { deleteRequst, getRequest, postRequest, putRequest } from "../Request"


export const getMedicinesdata = () => {
    return getRequest("Medicines")
}
export const addMedicinesdata = (data) => {
    return postRequest("Medicines", data)
}
export const deleteMedicinesdata = (id) => {
    return deleteRequst("Medicines/", id)
}
export const upadateMedicinesdata = (data) => {
    return putRequest("Medicines/", data)
}
