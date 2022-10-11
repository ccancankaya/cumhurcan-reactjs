import categorySlice from "./categorySlice";
import { ThunkAction,AnyAction } from "@reduxjs/toolkit";
import {RootState} from './index'
import CategoryModel from "../models/category.type";
import categoryService from "../services/category-service";

export const categoryActions=categorySlice.actions;

export const getCategories=():ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        if(getState().category.all_categories.length===0){
            const response:CategoryModel[]=await categoryService.getAll();
            dispatch(categoryActions.setCategories(response))
        }
    }
}

export const getCategoryById=(category_id:number):ThunkAction<void,RootState,unknown,AnyAction>=>{
    return async(dispatch,getState)=>{
        const response:CategoryModel=await categoryService.getById(category_id);
        dispatch(categoryActions.setSingleCategory(response));
    }
}
