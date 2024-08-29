import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">MyApp</Link>
        <div>
          <Link to="/" className="text-gray-400 hover:text-white mx-4">Home</Link>
          <Link to="/login" className="text-gray-400 hover:text-white mx-4">Log In</Link>
          <Link to="/register" className="text-gray-400 hover:text-white mx-4">Register</Link>
          <Link to="/recover-password" className="text-gray-400 hover:text-white mx-4">Recover Password</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
