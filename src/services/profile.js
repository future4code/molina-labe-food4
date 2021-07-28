import { BASE_URL, headers } from "../constants/urls";
import axios from "axios";


export const addOrEditAdress = (body) => {
    console.log("BODY", body);
  
    axios
      .put(`${BASE_URL}/fourFoodB/address`, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  
export const updateProfile = (body) => {
    console.log("BODY", body);
  
    axios
      .put(`${BASE_URL}/fourFoodB/profile`, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };