import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStroe";
// https://jsonplaceholder.typicode.com/posts/1

// userId	1
// id	1
// title	"sunt aut facere repellat…uri optio reprehenderit"
// body	"quia et suscipit\nsuscip… rem eveniet architecto"
interface IUserData {
    userId: any;
    id: any;
    title: any;
    body: any;
}
export class UserStore {
    userInfo: IUserData = {} as IUserData;
    rootStore: IRootStore
    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            userInfo: observable,
            fetchData: action,
            getUserData: computed
        })
        this.rootStore = rootStore
    }
   async fetchData(){
      try {
        let res= await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        this.userInfo=res?.data
      } catch (error) {
       console.log(error,'fetch data') 
      }
    }
    get getUserData() {
        return this.userInfo;
    }

}