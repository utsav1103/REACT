import axios from "axios";
//! login // return a promise

export const loginAPI = async ({email, passowrd})=> {
  const response =  await axios.post("http://localhost:5173/api/login", {email, passowrd});
  //return a promise
  return response.data
};