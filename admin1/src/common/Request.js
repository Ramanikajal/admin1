import axios from "axios";
import { BASE_URL } from "../shared/BASE_URL";

const axiosainstate = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  // headers: {'X-Custom-Header': 'foobar'}
});
export const sendRequest = (config) => {
  return axiosainstate.request(config)
}

export const getRequest = (path) => {
  return sendRequest({
    url: path,
    method: "GET"
  })

}
export const postRequest = (path, data) => {
  return sendRequest({
    url: path,
    method: "POST",
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },

  })

}
export const deleteRequst = (path, id) => {
  return sendRequest({
    url: path + id,
    method: "DELETE",

  })
}
export const putRequest = (path, data) => {
  return sendRequest({
    url: path + data.id,
    method: "PUT",
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },

  })
}
