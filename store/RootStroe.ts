import { CounterStore } from "./CounterStore";
import { UserStore } from "./UserDataStore";

export interface IRootStore {
    CountStore: CounterStore,
    UserDetails: UserStore
}
export class RootStore implements IRootStore {
    CountStore: CounterStore;
    UserDetails: UserStore;
    constructor() {
        this.CountStore = new CounterStore(this);
        this.UserDetails = new UserStore(this);
    }


}