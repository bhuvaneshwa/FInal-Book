import React, { useState } from 'react';
import Admin from '../Admin';

const Addproduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('electronics');
    const [productImage, setProductImage] = useState(null);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleProductDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    };

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    };

    const handleProductCategoryChange = (e) => {
        setProductCategory(e.target.value);
    };

    const handleProductImageChange = (e) => {
        setProductImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form data to be submitted
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productDescription', productDescription);
        formData.append('productPrice', productPrice);
        formData.append('productCategory', productCategory);
        formData.append('productImage', productImage);

        // You can now handle form submission here
        console.log(formData);
    };

    return (
        <>
            <Admin />
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-5">
                    <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                    <input
                        type="text"
                        id="product_name"
                        value={productName}
                        onChange={handleProductNameChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="product_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                    <textarea
                        id="product_description"
                        rows="4"
                        value={productDescription}
                        onChange={handleProductDescriptionChange}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter product description"
                    ></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="product_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                    <input
                        type="number"
                        id="product_price"
                        value={productPrice}
                        onChange={handleProductPriceChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Enter product price"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="product_category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Category</label>
                    <select
                        id="product_category"
                        value={productCategory}
                        onChange={handleProductCategoryChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required
                    >
                        <option value="electronics">Preminum</option>
                        <option value="clothing">General</option>
                        <option value="clothing">New</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="product_image">Product Image</label>
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400" black id="product_image"
                        type="file"
                        accept="image/*"
                        onChange={handleProductImageChange}
                    />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>
        </>
    );
};

export default Addproduct;
