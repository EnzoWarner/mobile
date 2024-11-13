
import axios from "axios";
// usar seu ipv4 local
// http://192.168.15.14:3333 /create
export const api = axios.create({
  baseURL: "http://192.168.15.14:3333"
})