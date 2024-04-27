import React, { useState } from 'react';
import Admin from '../Admin';

const AddProduct = () => {
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
        <div className="max-w-lg mx-auto border-2 border-blue-900 p-10 m-2">
            <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="product_name" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        id="product_name"
                        value={productName}
                        onChange={handleProductNameChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="product_description" className="block text-sm font-medium text-gray-700">Product Description</label>
                    <textarea
                        id="product_description"
                        rows="4"
                        value={productDescription}
                        onChange={handleProductDescriptionChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter product description"
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="product_price" className="block text-sm font-medium text-gray-700">Product Price</label>
                    <input
                        type="number"
                        id="product_price"
                        value={productPrice}
                        onChange={handleProductPriceChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter product price"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="product_category" className="block text-sm font-medium text-gray-700">Product Category</label>
                    <select
                        id="product_category"
                        value={productCategory}
                        onChange={handleProductCategoryChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="electronics">Premium</option>
                        <option value="clothing">General</option>
                        <option value="furniture">New</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="product_image" className="block text-sm font-medium text-gray-700">Product Image</label>
                    <input
                        id="product_image"
                        type="file"
                        accept="image/*"
                        onChange={handleProductImageChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
