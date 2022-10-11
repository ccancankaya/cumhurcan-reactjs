import productSlice from "./productSlice";
import { ThunkAction,AnyAction } from "@reduxjs/toolkit";
import {RootState} from './index'
import ProductModel from "../models/product.type";
import ProductService from '../services/product.service'

export const productActions=productSlice.actions;

export const getProducts=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().product.all_products.length===0){
            const response:ProductModel[]=await ProductService.getAll();
            dispatch(productActions.setProducts(response))
        }
    }
}

export const getProductsByCategory=(category_name:string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().product.all_products.length===0){
            const arr:ProductModel[]=[];
            getState().product.all_products.map(product=>{
                if(product.category===category_name){
                    arr.push(product)
                }
            })
            const response:ProductModel[]=arr
            dispatch(productActions.setProductsByCategory(response))
        }
    }
}

export const getProductById=(product_id:any):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:ProductModel=await ProductService.getById(product_id);
        dispatch(productActions.setSingleProduct(response));
    }
}

export const addProduct=(product:any):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:ProductModel=await ProductService.addProduct(product);
        dispatch(productActions.addProduct(response));
    }
}