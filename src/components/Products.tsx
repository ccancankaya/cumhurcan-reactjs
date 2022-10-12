import React, { useEffect, useState } from "react";
import { Disclosure } from '@headlessui/react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getProducts, getProductById,getProductsByCategory } from "../store/productActions";
import { getCategories, getCategoryById } from "../store/categoryActions";

const Products = () => {

    const dispatch = useAppDispatch();
    var products = useAppSelector(state => state.product.all_products);
    const categories = useAppSelector(state => state.category.all_categories);
    const productsByCategories=useAppSelector(state=>state.product.productsByCategory);
  
    
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories())       
    }, [dispatch])

    if(productsByCategories.length>0){
        products=productsByCategories
    }

    const handleClick=(categoryName:string)=>{
        
       dispatch(getProductsByCategory(categoryName))
       
    }
    return (
        <div className="bg-white">
            <div className="grid grid-cols-6 gap-4">
                {/*Category section */}
                <div className="mt-5">
                    <div className="divide-y divide-slate-500">
                        {
                            categories.map((category) => (
                                <div className="w-5/6 mx-2">
                                    <p className="text-center font-mono text-lg"><button onClick={()=>handleClick(category.name)}>{category.name}</button></p>
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
                                            <img
                                                src={product.avatar}
                                                alt={product.name}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <Link to={`/detail?id=${product._id}`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.name}
                                                    </Link>
                                                        
                                                    
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                            <p className="text-sm font-medium text-gray-900">{product.category}</p>

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