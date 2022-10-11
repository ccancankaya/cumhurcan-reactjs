import CategoryModel from "../models/category.type";
import CategoryArrayModel from "../models/category-array.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCategoryState: CategoryArrayModel = {
    all_categories: [],
    single_category:{
        "id":"",
        "name":""
    }
}


const categorySlice=createSlice({
    name:'category',
    initialState:initialCategoryState,
    reducers:{
        setCategories(state,action:PayloadAction<CategoryModel[]>){
            state.all_categories=action.payload;
        },
        setSingleCategory(state,action:PayloadAction<CategoryModel>){
            state.single_category=action.payload;
        }
    }
})

export default categorySlice;