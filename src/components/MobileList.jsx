import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MobileList = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        const fetchMobiles = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/mobiles`);
                setMobiles(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMobiles();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/mobiles/${id}`);
            setMobiles(mobiles.filter(mobile => mobile._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Mobiles</h2>
            <ul className="space-y-6">
                {mobiles.map((mobile) => (
                    <li key={mobile._id} className="p-6 bg-white shadow-md rounded-lg flex items-center">
                        <img src={mobile.imageUrl} alt={mobile.name} className="w-48 h-48 object-cover rounded mr-6" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{mobile.name} ({mobile.brand})</h3>
                            <p className="mb-2">Price: {mobile.price}</p>
                            <p className="mb-2">Specs: {mobile.specs.ram} RAM, {mobile.specs.storage} Storage, {mobile.specs.battery} Battery</p>
                        </div>
                        <button onClick={() => handleDelete(mobile._id)} className="ml-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileList;
