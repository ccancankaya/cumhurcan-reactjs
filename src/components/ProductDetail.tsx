import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getProducts, getProductById } from "../store/productActions";
import { getCategories, getCategoryById } from "../store/categoryActions";
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

function useQuery() {
    const { search } = useLocation();


    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const ProductDetail = () => {
    const product = {
        name: 'Basic Tee 6-Pack',
        price: '$192',
        href: '#',
        breadcrumbs: [
            { id: 1, name: 'Men', href: '#' },
            { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
                alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
                alt: 'Model wearing plain black basic tee.',
            },
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
                alt: 'Model wearing plain gray basic tee.',
            },
            {
                src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
                alt: 'Model wearing plain white basic tee.',
            },
        ],
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: true },
        ],
        description:
            'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        details:
            'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    }
    const reviews = { href: '#', average: 4, totalCount: 117 }
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])
    const colors= [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ]

    const query = useQuery();

    const dispatch = useAppDispatch();
    const a = useAppSelector(state => state.product.single_product);

    useEffect(() => {
        dispatch(getProductById(query.get('id')));
    }, [dispatch, query])

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">                        
                            <li >
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                                        {a.category}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>                      
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {a.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 grid grid-cols-3">
                    {/* Image gallery */}
                    <div className="col-span-1">
                        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                            <img
                                src={a.avatar}
                                alt={a._id}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="col-span-2">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{a.name}</h1>
                    </div>
                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{a.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">                                     
                                            <li  className="text-gray-400">
                                                <span className="text-gray-600">Good product</span>
                                            </li>
                                            <li  className="text-gray-400">
                                                <span className="text-gray-600">Good quality</span>
                                            </li>
                                            <li  className="text-gray-400">
                                                <span className="text-gray-600">Lorem ipsum</span>
                                            </li>
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Category</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{a.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                 

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">$ {a.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    117 reviews
                                </a>
                            </div>
                        </div>

                        <div className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                    <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {colors.map((color) => (
                                            <RadioGroup.Option
                                                key={color.name}
                                                value={color}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        color.selectedClass,
                                                        active && checked ? 'ring ring-offset-1' : '',
                                                        !active && checked ? 'ring-2' : '',
                                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label as="span" className="sr-only">
                                                    {' '}
                                                    {color.name}{' '}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        color.class,
                                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                    )}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                      

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to bag
                            </button>
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
    )
}


export default ProductDetail;