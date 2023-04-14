import { useNavigate } from "react-router-dom"
import { LoginModel } from "../model/LoginModel"
import { AuthModel } from "../model/AuthModel"
import { RegisterModel } from "../model/RegisterModel"

const baseUrlAuth = 'http://localhost:8080/api/auth'

const login = (loginData: LoginModel) => {
    return fetch(`${baseUrlAuth}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
    }, err => err)
}

const register = (registerData: RegisterModel) => {
    return fetch(`${baseUrlAuth}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        } 
    })
}

const logout = (onLogout: () => void) => {
    return fetch(`${baseUrlAuth}/logout`, {
        method: 'POST',
    })
}

export default {
    login: login,
    register: register,
    logout: logout
}