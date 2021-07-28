import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToFeed} from '../routes/Cordinator'

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

export const singUp = (body, clean,history) => {
    axios.post(` ${BASE_URL}/fourFoodB/signup`, body, {
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