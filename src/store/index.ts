import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";

const store=configureStore(
    {
        reducer:{
            product:productSlice.reducer,
            category:categorySlice.reducer
        }
    }
)

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export default store;