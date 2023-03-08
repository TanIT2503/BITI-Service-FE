import { data } from 'autoprefixer';
import React, { Component, useState, useEffect } from 'react';

class List extends Component {

    // constructor() {
    //     super();

    //     this.state = {
    //         productList: []
    //     }
    // }

    // async componentDidMount() {
    //     await fetch('http://localhost:6002/product-service/product?page=0&size=8&sort=asc')
    //         .then(res => res.json())
    //         .then((data) => {
    //             this.setState({ productList: data })
    //         })
    //         .catch(console.log)
    // }


    List = () => {
        const [data, setData] = useState({ productList: [] });
        const axios = require('axios').default;
        useEffect(async () => {
            const result = await axios.get(
                'http://localhost:6002/product-service/product?page=0&size=8&sort=asc'
            );
            setData(result.data);
        });

        return (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Descriptions
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quatity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" >
                            {data.productList.map(item => (
                                <><th key={item.productName} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th><td></td></>
                                // <th key={item.productName} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                // </th><td key={item.productDescriptions} class="px-6 py-4">

                                //     </td><td key={item.quantity} class="px-6 py-4">

                                //     </td><td key={item.location} class="px-6 py-4">

                                //     </td><td key={item.productCategories.categoryName} class="px-6 py-4">

                                //     </td><td class="px-6 py-4 text-right">
                                //         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                //     </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


}
export default List;