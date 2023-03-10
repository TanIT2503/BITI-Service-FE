/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const List = () => {
    const [payload, setPayload] = useState([]);
    const fetchData = async () => {
        const result = await axios(
            "http://localhost:6002/product-service/product?page=0&size=5&sort=asc"
        );
        setPayload(result.data.content);
    };


    useEffect(() => {
        fetchData();
    }, []);


    const [products, setProducts] = useState([]);
    const removeProduct = async (id) => {
        await fetch(`http://localhost:6002/product-service/product-delete/${id}`, {
            method: 'GET',
        });
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        fetchData();
    };

    return (
        <>
        <div>
            <div className="flex align-middle justify-center m-10">
                <div className="container flex justify-between">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Product List
                    </h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link to="/create">Create</Link>
                    </button>

                </div>
            </div>
            <div className="flex align-middle justify-center m-10">
                <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Product name</th>
                                <th className="px-6 py-3">Descriptions</th>
                                <th className="px-6 py-3">Quatity</th>
                                <th className="px-6 py-3">Location</th>
                                <th className="px-6 py-3">Category</th>
                                <th align="center" className="px-6 py-3" colSpan="2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                                {/* chỗ này làm như vậy hoặc có thể viết như này */}
                                {!!payload?.length && payload.map((item) => (
                                <tr key={item.id}
                                    className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.productName}
                                    </td>
                                    <td className="px-6 py-4">{item.productDescriptions}</td>
                                    <td className="px-6 py-4">{item.quantity}</td>
                                    <td className="px-6 py-4">{item.location}</td>
                                    <td className="px-6 py-4">
                                        {item.productCategories.categoryName}
                                    </td>
                                    <td align="center" className="px-6 py-4">
                                        <div
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"

                                        >
                                            <Link to={`/detail?id=${item.id}`}>Detail</Link>
                                        </div>
                                    </td>
                                    <td align="center" className="px-6 py-4">
                                        <div
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"

                                        >
                                                <Link to={`/create?id=${item.id}`}>Update</Link>
                                        </div>
                                    </td>
                                    <td align="center" className="px-6 py-4">
                                        <div
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                                <button onClick={() => removeProduct(item.id)}>Xoá</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        </>
    );
};
export default List;
