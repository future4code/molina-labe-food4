import axios from 'axios'
import {goToFeed, goToAddress} from '../routes/Cordinator'
import { BASE_URL, headers } from "../constants/urls";


export const login = (body, clean,history) => {
    axios.post(` ${BASE_URL}/fourFoodB/login`, body, {
        "headers": {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        localStorage.setItem("token", res.data.token)
        clean()
        goToFeed(history)
    }).catch((err) => {
        alert(err.response.data.message)

    })
}

export const singUp = (body, clean, history) => {
    axios.post(` ${BASE_URL}/fourFoodB/signup`, body, {
        "headers": {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        localStorage.setItem("token", res.data.token)
        clean()
        goToAddress(history)
    }).catch((err) => {
        alert(err.response.data.message)

    })
}

export const SignUpAddressPage = (body, clean, history) => {
    axios.put(`${BASE_URL}/fourFoodB/address`, body, {
        headers: headers,

    }).then((res) =>{
        localStorage.setItem("token", res.data.token)
        goToFeed(history)
    }).catch((err) =>{
        alert(err.response.data.message)
    })
}