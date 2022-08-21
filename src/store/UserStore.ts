import {makeAutoObservable} from "mobx";
import {User} from "../types";

export default class UserStore{

    private isAuth: boolean
    private user?: User

    constructor() {
        this.isAuth = false
        this.user = null
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean){
        this.isAuth = bool
    }

    setUser(user: User){
        this.user = user
    }

    getIsAuth(){
        return this.isAuth
    }
    getUser(){
        return this.user
    }

}