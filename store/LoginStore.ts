import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStroe";


export class LoginStore {
    userToken: any = "";
    rootStore: IRootStore
    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            userToken: observable,
            postData: action,
            logout:action,
            getUserToken: computed
        })
        this.rootStore = rootStore
    }
    async postData(username: string, password: string) {
        try {
            let res = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            });
            this.userToken = res?.data?.token
            // alert(res.data.token)
        } catch (error) {
            console.log(error, 'post user data')
        }
    }
logout=()=>{
    this.userToken=''
}

    get getUserToken() {
        return this.userToken;
    }

}