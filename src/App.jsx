import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileList from './components/MobileList';
import AddMobile from './components/AddMobile';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-mobile" element={<AddMobile />} />
                    <Route path="/mobiles" element={<MobileList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
