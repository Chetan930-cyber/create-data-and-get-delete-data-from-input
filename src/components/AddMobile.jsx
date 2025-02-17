import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMobile = () => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: '',
        ram: '',
        storage: '',
        battery: '',
        imageUrl: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const specs = {
                ram: formData.ram,
                storage: formData.storage,
                battery: formData.battery
            };
            await axios.post('http://localhost:5000/mobiles', { ...formData, specs });
            navigate('/mobiles');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-8">
            <button onClick={() => navigate('/')} className="self-start mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Back</button>
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Add Mobile</h2>
            <form onSubmit={handleSubmit} className="w-full">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <input type="text" name="ram" value={formData.ram} onChange={handleChange} placeholder="RAM" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <input type="text" name="storage" value={formData.storage} onChange={handleChange} placeholder="Storage" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <input type="text" name="battery" value={formData.battery} onChange={handleChange} placeholder="Battery" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" required className="mb-3 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-100" />
                <button type="submit" className="bg-green-500 text-white p-3 rounded w-full hover:bg-green-600 transition cursor-pointer">Add Mobile</button>
            </form>
        </div>
    );
};

export default AddMobile;
