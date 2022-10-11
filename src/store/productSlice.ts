import ProductModel from "../models/product.type";
import ProductArrayModel from "../models/product-array.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialProductState: ProductArrayModel = {
    all_products: [],
    single_product: {
        "id": 0,
        "name": "",
        "avatar": "",
        "price": 0,
        "description": "",
        "category": "",
        "developerEmail":"" 
    }
}


const productSlice=createSlice({
    name:'product',
    initialState:initialProductState,
    reducers:{
        setProducts(state,action:PayloadAction<ProductModel[]>){
            state.all_products=action.payload;
        },
        setSingleProduct(state,action:PayloadAction<ProductModel>){
            state.single_product=action.payload;
        }
    }
})

export default productSlice;