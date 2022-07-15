import axios from "axios";
import { BASE_URL } from "../shared/BASE_URL";

const  axiosainstate= axios.create({
   baseURL: BASE_URL,
    timeout: 2000,
    // headers: {'X-Custom-Header': 'foobar'}
});
  export const sendRequest =(config)=>
 {
    return axiosainstate.request(config)
 }

  export const getRequest =(path)=>{
    return sendRequest({
      url: path,
      method:"GET"
    })
   
   }