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
        const response=getState().product.all_products.filter(({category})=>category===category_name)
        dispatch(productActions.setProductsByCategory(response));
    }
}

export const getProductById=(product_id:any):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:ProductModel=await ProductService.getById(product_id);
        dispatch(productActions.setSingleProduct(response));
    }
}

export const addProduct=(product:ProductModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response=await ProductService.addProduct(product);
        var temp:ProductModel[]=Object.assign([],getState().product.all_products)
        console.log(response)
        if(response.status.toString()==="Success"){
            temp.push(response.data.product);
            dispatch(productActions.addProduct(temp));
        }
        
        temp.push(product)
        dispatch(productActions.addProduct(temp));
    }
}

export const deleteProduct=(product_id:string):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response=getState().product.all_products.filter(({_id})=>_id!==product_id)
        dispatch(productActions.deleteProduct(response));
    } 
}

export const addProductToFavourite=(product:ProductModel):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        var temp:ProductModel[]=Object.assign([],getState().product.favouriteProducts)
        temp.push(product);
        dispatch(productActions.addFavouriteProduct(temp));
    }
}