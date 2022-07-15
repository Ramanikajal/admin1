import { getRequest } from "../Request"


export const getMedicinesdata = () => {
    return getRequest("Medicines")
}