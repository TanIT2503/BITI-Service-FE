/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";


const List = () => {
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "http://localhost:6002/product-service/product?page=0&size=5&sort=asc"
            );
            setPayload(result.data.content);
        };
        fetchData();
    }, []);
    console.log(payload);

    return (
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
                        {payload.map((item) => (
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
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"

                                    >
                                        Edit
                                    </a>
                                </td>
                                <td align="center" className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default List;
