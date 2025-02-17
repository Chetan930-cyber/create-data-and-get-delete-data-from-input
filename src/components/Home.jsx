import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <h1 className="text-6xl font-extrabold mb-8 drop-shadow-lg">Mobile Inventory</h1>
            <div className="flex space-x-4">
                <Link to="/add-mobile" className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105">Add Mobile Information</Link>
                <Link to="/mobiles" className="bg-green-600 text-white py-4 px-8 rounded-lg shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1 hover:scale-105">See Mobile Details</Link>
            </div>
        </div>
    );
};

export default Home;
