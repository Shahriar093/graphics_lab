import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-blue-50/80 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100/50 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-inner">
            <span className="text-white text-xs">🌊</span>
          </div>
          <h1 className="font-semibold text-xl tracking-tight text-blue-800">
            Serene<span className="font-light text-blue-500">Mind</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-8 items-center text-blue-700/80 font-medium">
          <Link to="/">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Home
            </li>
          </Link>

          {/* New: Breathing Exercise Link */}
          <Link to="/breathing">
            <li className="hover:text-blue-500 transition-colors duration-300 flex items-center gap-1">
              <span>Breathe</span>
              <span className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
            </li>
          </Link>

          {/* New: Play Games Link */}
          <Link to="/games">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              Play Games
            </li>
          </Link>

          <Link to="/about">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              About
            </li>
          </Link>

          {/* Profile / Sign In Section */}
          <Link to="/profile">
            {currentUser ? (
              <div className="flex items-center gap-3 bg-white/50 p-1 pr-4 rounded-full border border-blue-100 hover:shadow-md transition-all">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-8 w-8 rounded-full object-cover border border-blue-200"
                />
                <span className="text-sm text-blue-800 hidden sm:inline">
                  My Sanctuary
                </span>
              </div>
            ) : (
              <li className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all shadow-lg shadow-blue-200/50 text-sm tracking-wide">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
