import { BASE_URL, headers } from "../constants/urls";
import axios from "axios";
import { goToProfile } from "../routes/Cordinator";

export const addOrEditAdress = (body, clear, history) => {
    console.log("BODY", body);
  
    axios
      .put(`${BASE_URL}/fourFoodB/address`, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        clear()
        goToProfile(history)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
export const updateProfile = (body, clear, history) => {
    console.log("BODY", body);
  
    axios
      .put(`${BASE_URL}/fourFoodB/profile`, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
        clear()
        goToProfile(history)
      })
      .catch((err) => {
        console.log(err);
      });
  };