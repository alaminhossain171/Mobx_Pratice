import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStroe";

export class CounterStore {
    count: number = 0;
    rootStore: IRootStore
    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
            reset: action,
            getValue: computed
        })
        this.rootStore = rootStore
    }
    increment = (value:number) => {
        this.count = this.count + value;
    }
    decrement = () => {
        this.count = this.count - 1
    }
    reset = () => {
        this.count = 0
    }
    get getValue() {
        return this.count;
    }

}