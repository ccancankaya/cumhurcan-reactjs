import React from "react";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addProduct } from "../store/productActions";
import { getCategories, getCategoryById } from "../store/categoryActions";
import ProductModel from "../models/product.type";

const AddProduct = () => {
    const dispatch = useAppDispatch();
    const initialProduct: ProductModel = {
        "name": "",
        "avatar": "",
        "price": 0,
        "description": "",
        "category": "",
        "developerEmail": ""
    }
    return (
        <div className="mt-10 sm:mt-0">



            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-5 md:col-span-3 md:mt-0 mx-auto">
                    <Formik
                        initialValues={initialProduct}
                        onSubmit={(values, actions) => {
                            dispatch(addProduct(JSON.stringify(values, null, 2)))
                            actions.setSubmitting(false);
                        }}
                    >
                        <Form>

                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Product Name
                                            </label>
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md shadow-sm sm:text-xl"
                                                style={{ "border": "1px solid black" }}

                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <Field
                                                type="text"
                                                name="description"
                                                id="description"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md shadow-sm sm:text-xl"
                                                style={{ "border": "1px solid black" }}

                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                                                Avatar
                                            </label>
                                            <Field
                                                type="text"
                                                name="avatar"
                                                id="avatar"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md shadow-sm sm:text-xl"
                                                style={{ "border": "1px solid black" }}

                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Price
                                            </label>
                                            <Field
                                                type="number"
                                                name="price"
                                                id="price"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md shadow-sm sm:text-xl"
                                                style={{ "border": "1px solid black" }}

                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                                Category
                                            </label>
                                            <Field
                                                type="text"
                                                name="category"
                                                id="category"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md shadow-sm sm:text-xl"
                                                style={{ "border": "1px solid black" }}

                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="developerEmail" className="block text-sm font-medium text-gray-700">
                                                Developer Email
                                            </label>
                                            <Field
                                                type="text"
                                                name="developerEmail"
                                                id="developerEmail"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md shadow-sm sm:text-xl"
                                                style={{ "border": "1px solid black" }}

                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </Formik>



                </div>
            </div>
        </div>
    )
}

export default AddProduct;