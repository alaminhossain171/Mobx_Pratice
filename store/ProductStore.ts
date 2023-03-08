import axios from "axios";
import { makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStroe";
export interface Rating {
    rate: number;
    count: number;
}

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}
export class ProductStore {
    products: ProductType[] = []
    rootStore: IRootStore
    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            products: observable,
        })
        this.rootStore = rootStore
    }
    fetchProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products`);
            this.products = res?.data
        } catch (error) {
            console.log('error product fetch ');
        }
    }
    get getUserData() {
        return this.products;
    }
}