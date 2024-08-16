import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Register />
            <Login />
        </div>
    );
};

export default HomePage;
