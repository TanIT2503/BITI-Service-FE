
const Update = () => {



    return (
        <section>

            <div className="flex align-middle justify-center m-10">
                <div className="container border rounded-xl justify-center p-10 align-middle">
                    <div className="mb-6">
                        <label for="product_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Id</label>
                        <input type="text" id="product_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product ID" required />
                    </div>
                    <div className="mb-6">
                        <label for="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name</label>
                        <input type="text" id="product_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product name" required />
                    </div>
                    <div className="mb-6">
                        <label for="descriptions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriptions</label>
                        <input type="text" id="descriptions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descriptions" required />
                    </div>
                    <div className="mb-6">
                        <label for="quatity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quatity</label>
                        <input type="number" id="quatity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quatity" required />
                    </div>

                    <div className="mb-6">
                        <label for="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Location" required />
                    </div>

                    <div className="mb-6">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected></option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div class="m-6 flex justify-center">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-96 h-96 first-letter: border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <img className="w-80 h-80" src="https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png" />
                            {/* <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div> */}
                            <input  id="dropzone-file" name="image" type="file" class="hidden" />
                        </label>
                    </div>
                    <div className="m-6 flex justify-center align-middle space-x-5">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                        <button className="text-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Cancel</button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Update;