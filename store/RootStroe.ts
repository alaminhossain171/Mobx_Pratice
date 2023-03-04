import { CounterStore } from "./CounterStore";
import { LoginStore } from "./LoginStore";
import { UserStore } from "./UserDataStore";

export interface IRootStore {
    CountStore: CounterStore,
    UserDetails: UserStore,
    AuthToken: LoginStore
}
export class RootStore implements IRootStore {
    CountStore: CounterStore;
    UserDetails: UserStore;
    AuthToken: LoginStore;
    constructor() {
        this.CountStore = new CounterStore(this);
        this.UserDetails = new UserStore(this);
        this.AuthToken = new LoginStore(this);
    }


}