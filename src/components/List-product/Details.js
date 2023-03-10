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
    console.log(id);

    const [product, setProduct] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`http://localhost:6002/product-service/product/detail/` + urlParams.get('id'));
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [urlParams]);

    return (
        <div>
            <div className="flex align-middle justify-center m-10">
                <div className="container flex justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Product Detail
                    </h1>

                </div>
            </div>
            <div class="flex align-middle justify-center m-10">
                <div class="container border rounded-xl justify-center p-10 align-middle">
                    <div class="mb-6 flex space-x-2">
                        <label for="productName" class="block mb-2 text-7xl font-bold text-gray-900 dark:text-white">{product.productName}</label>
                    </div>
                    <div class="mb-6 flex space-x-2">
                        <label for="productDescription" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Descriptions: </label>
                        <span className="block mb-2 text-lg">
                            {product.productDescriptions}
                        </span>
                    </div>
                    <div class="mb-6 flex space-x-2">
                        <label for="Quatity" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Quatity: </label>
                        <span className="block mb-2 text-lg">
                            {product.quantity} sp
                        </span>
                    </div>
                    <div class="mb-6 flex space-x-2">
                        <label for="Location" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Location: </label>
                        <span className="block mb-2 text-lg">
                            {product.location}
                        </span>
                    </div>
                    <div class="mb-6 flex space-x-2">
                        <label for="Category" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Category: </label>
                        <span className="block mb-2 text-lg">
                            {product.productCategories.categoryName}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Detail;
