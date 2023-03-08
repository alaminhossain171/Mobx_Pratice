import { CounterStore } from "./CounterStore";
import { LoginStore } from "./LoginStore";
import { ProductStore } from "./ProductStore";
import { UserStore } from "./UserDataStore";

export interface IRootStore {
    CountStore: CounterStore,
    UserDetails: UserStore,
    AuthToken: LoginStore,
    ProductsData:ProductStore
}
export class RootStore implements IRootStore {
    CountStore: CounterStore;
    UserDetails: UserStore;
    AuthToken: LoginStore;
    ProductsData:ProductStore
    constructor() {
        this.CountStore = new CounterStore(this);
        this.UserDetails = new UserStore(this);
        this.AuthToken = new LoginStore(this);
        this.ProductsData=new ProductStore(this);
    }


}