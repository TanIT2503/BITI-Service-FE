/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Detail = () => {
    // const [payload, setPayload] = useState({});
    // const [product, setProduct] = useState({});
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    const [product, setProduct] = useState({
        productName: '',
        productDescriptions: '',
        quantity: '',
        location: '',
        productCategoriesId: '',
        active: 'STILL',
        imageName: '',
    });

    useEffect(() => {

        fetch(`http://localhost:6002/product-service/product/detail/` + urlParams.get('id'))
            .then(res => res.json())
            .then
            (data => {
                setProduct({
                    productName: data.productName,
                    productDescriptions: data.productDescriptions,
                    quantity: data.quantity,
                    location: data.location,
                    productCategoriesId: data.productCategories.categoryName,
                    active: data.active,
                    imageName: data.imageProduct.imageUri
                });
            })
    }, []);
    return (

        // <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.imageName} alt="product" />
        //     <div class="flex flex-col justify-between p-4 leading-normal">
        //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        //         </div>
        // </a>

        <div>
            <div className="flex align-middle justify-center m-10">
                <div className="container flex justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Product Detail
                    </h1>
                </div>
            </div>
            <div className="flex align-middle justify-center m-10">
                <div className="container border rounded-xl p-10 align-middle flex justify-around">
                    <div>
                        <img src={product.imageName} alt="product" className="w-96 h-96 border rounded-2xl" />
                    </div>
                    <div>
                        <div className="mb-6 flex space-x-2">
                            <label for="productName" className="block mb-2 text-7xl font-bold text-gray-900 dark:text-white">{product.productName}</label>
                        </div>
                        <div className="mb-6 flex space-x-2">
                            <label for="productDescription" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Descriptions: </label>
                        <span className="block mb-2 text-lg">
                            {product.productDescriptions}
                        </span>
                    </div>
                        <div className="mb-6 flex space-x-2">
                            <label for="Quatity" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Quatity: </label>
                        <span className="block mb-2 text-lg">
                            {product.quantity} sp
                        </span>
                    </div>
                        <div className="mb-6 flex space-x-2">
                            <label for="Location" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Location: </label>
                        <span className="block mb-2 text-lg">
                            {product.location}
                        </span>
                    </div>
                        <div className="mb-6 flex space-x-2">
                            <label for="status" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Status: </label>
                        <span className="block mb-2 text-lg">
                                {product.active}
                        </span>
                        </div>
                        <div className="mb-6 flex space-x-2">
                            <label for="status" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Category: </label>
                            <span className="block mb-2 text-lg">
                                {product.productCategoriesId}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Detail;
