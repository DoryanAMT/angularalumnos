import axios from "axios"
import { environment } from "../../environments/environment.development"
import { Injectable } from "@angular/core"
import Login from "../models/login";
import Alumno from "../models/alumno";

@Injectable({
    providedIn: 'root'
})
export class ServiceLogin {
    public token: string;

    constructor() {
        this.token = ""
    }

    authLogin(login: Login): Promise<any> {
        return new Promise(function (resolve) {
            let request = "api/Auth/Login";
            let url = environment.urlApiAlumnos + request;

            axios.post(url, login).then(response => {
                let token = response.data.response
                resolve(token);
                localStorage.setItem("token", token);
            })
        })
    }

    getActiveAlumnos(): Promise<any> {

        let token = localStorage.getItem("token");
        return new Promise(function (resolve) {
            // console.log(token);
            let request = "api/Alumnos/AlumnosToken";
            let url = environment.urlApiAlumnos + request;

            axios.get(url, {
                headers: { Authorization: `Bearer  ${token}` }
            }).then(response => {
                resolve(response.data);
            })

        })
    }

    getCursos(): Promise<any> {
        return new Promise(function (resolve) {
            const token = localStorage.getItem("token");

            let request = "api/Alumnos/cursosToken";
            let url = environment.urlApiAlumnos + request;
            // console.log(url)

            axios.get(url, {
                headers: { Authorization: `Bearer  ${token}` }
            }).then(response => {
                console.log(response)
                resolve(response.data);
            })

        })
    }

    insertAlumno(alumno: Alumno): Promise<any> {
        return new Promise(function (resolve) {
            const token = localStorage.getItem("token");
            let request = "api/Alumnos/InsertAlumnoToken";
            let url = environment.urlApiAlumnos + request;

            axios.post(url,alumno ,{
                headers: { Authorization: `Bearer  ${token}` }
            }).then(response => {
                console.log(response)
                resolve(response.data);
            })
        })
    }

}