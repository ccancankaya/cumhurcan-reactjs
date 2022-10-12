import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getFavouriteProducts, deleteProductToFavouriteList } from "../store/productActions";

import ProductModel from "../models/product.type";
import { ToastContainer, toast } from 'react-toastify';

const FavouriteProducts = () => {

    const dispatch = useAppDispatch();
    var products = useAppSelector(state => state.product.favouriteProducts);

    useEffect(() => {
        dispatch(getFavouriteProducts());
    }, [dispatch])

    const handleDeleteToFavouriteList = (product_id: string) => {
        dispatch(deleteProductToFavouriteList(product_id))
    }

    return (
        <div className="bg-white">
            <ToastContainer />
            <div className="grid grid-cols-6 gap-4">
                {/*Product section */}
                <div className="col-span-6 mt-5">
                    <div className="mx-auto max-w-2xl  px-4  sm:px-6 lg:max-w-7xl lg:px-3">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">My Favourite Products</h2>

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

                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">$ {product.price}</p>
                                            </div>
                                            <br />
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={() => handleDeleteToFavouriteList(product._id)}
                                            >
                                                Delete to favourite
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

export default FavouriteProducts;