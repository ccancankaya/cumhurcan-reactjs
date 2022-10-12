import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getProducts, getProductsByCategory, deleteProduct,addProductToFavourite } from "../store/productActions";
import { getCategories, getCategoryById } from "../store/categoryActions";
import ProductModel from "../models/product.type";
import { ToastContainer, toast } from 'react-toastify';

const Products = () => {

    const dispatch = useAppDispatch();
    var products = useAppSelector(state => state.product.all_products);
    const categories = useAppSelector(state => state.category.all_categories);
    const productsByCategories = useAppSelector(state => state.product.productsByCategory);


    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories())
    }, [dispatch])

    if (productsByCategories.length > 0) {
        products = productsByCategories
    }

    const handleClick = (categoryName: string) => {

        dispatch(getProductsByCategory(categoryName))

    }

    const handleDelete = (product_id: string) => {
        dispatch(deleteProduct(product_id))
        toast.error("Deleted product")
    }

    const handleFavourite=(product:ProductModel)=>{
        dispatch(addProductToFavourite(product))
        toast.error("Added favourite",{icon: ({theme, type}) =>  
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    })
    }

    return (
        <div className="bg-white">
            <ToastContainer />
            <div className="grid grid-cols-6 gap-4">
                {/*Category section */}
                <div className="mt-5 cat">
                    <div className="divide-y divide-slate-500">
                        {
                            categories.map((category) => (
                                <div className="w-5/6 mx-2">
                                    <p className="text-center font-mono text-lg"><button onClick={() => handleClick(category.name)}>{category.name}</button></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/*Product section */}
                <div className="col-span-5">
                    <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-3">
                        {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2> */}

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                            {

                                products.map((product) => (
                                    <div key={product._id} className="group relative">
                                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                            <Link to={`/detail?id=${product._id}`}>
                                                <img
                                                    src={product.avatar}
                                                    alt={product.name}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </Link>

                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">{product.name}</h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                            </div>
                                            <div>
                                                <button onClick={()=>{handleFavourite(product)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 svgH">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                </button>
                                               


                                            </div>

                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">$ {product.price}</p>
                                            </div>
                                            <br />
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={() => handleDelete(product._id)}
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;