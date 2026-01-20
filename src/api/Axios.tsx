import axios from "axios";
export const BASEURL = "http://localhost:3000"
const API = axios.create({
    baseURL:BASEURL,
     headers: {
    'Content-Type': 'application/json',
  },
})

export default API