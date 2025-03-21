// import React, { useState } from "react";
// import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";

// const categories = [
//   { id: 1, name: "Cat-1" },
//   { id: 2, name: "Cat-2" },
//   { id: 3, name: "Cat-3" },
//   { id: 4, name: "Cat-4" },
//   { id: 5, name: "Cat-5" },
//   { id: 6, name: "Cat-6" },
// ];

// const Navbar = ({ cartCount }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <img src="/path-to-logo.png" alt="Logo" className="logo-image" />
//         </div>

//         <nav className="nav">
//           <div className="nav-toggle" onClick={toggleMenu}>
//             <FaBars className="menu-icon" />
//           </div>
//           <div className={`nav-links ${menuOpen ? "active" : ""}`}>
//             <Link to="/" className="nav-link">HOME</Link>
//             <Link to="/shop" className="nav-link">SHOP</Link>
//             <div className="nav-dropdown">
//               <span className="nav-link">CATEGORIES</span>
//               <div className="dropdown-menu">
//                 {categories.map((category) => (
//                   <Link to={`/category/${category.id}`} className="dropdown-item">{category.name}</Link>
//                 ))}
//               </div>
//             </div>
//             <Link to="/about" className="nav-link">ABOUT US</Link>
//           </div>
//         </nav>

//         <div className="header-actions">
//           <div className="search-wrapper">
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search..."
//             />
//             <FaSearch className="search-icon" />
//           </div>
//           <Link to="/cart">
//             <FaShoppingCart className="cart-icon" />
//             <span className="cart-count">{cartCount}</span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { use, useState } from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { BsCartFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/image2bg.jpg";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  const cartCount = useSelector((state) => state.cart.cartCount);

  const toggleUserMenu = () => {
    if (isLoggedIn) {
      setUserMenuOpen(!userMenuOpen);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 relative z-50">
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto rounded-full" />
        </div>

        <ul className="flex space-x-6 font-semibold">
          <li><a href="/" className="hover:text-gray-500">HOME</a></li>
          <li><a href="/shop" className="hover:text-gray-500">SHOP</a></li>
          <li><a href="#" className="hover:text-gray-500">CATEGORIES</a></li>
          <li><a href="/about" className="hover:text-gray-500">ABOUT US</a></li>
        </ul>

        <div className="flex items-center space-x-4 relative">
          <div className="relative hidden md:block">
            <input type="text" placeholder="Search..." className="border rounded-full px-4 py-1 outline-none" />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link to="/cart" >
          <div className="relative">
            <BsCartFill className="text-black text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
            )}
          </div>
          </Link>
          <FiUser className="text-black text-2xl cursor-pointer" onClick={toggleUserMenu} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center">
        <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
        <div className="flex-1 flex justify-center">
          <img src={logo} alt="Logo" className="h-8 w-auto rounded-full" />
        </div>
        <div className="relative flex items-center space-x-4">
          {!showSearch ? (
            <FiSearch className="text-black text-2xl cursor-pointer" onClick={() => setShowSearch(true)} />
          ) : (
            <div className="relative">
              <input type="text" placeholder="Search..." className="border rounded-full px-4 py-1 outline-none" />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          )}
          <Link to="/cart">
          <div className="relative">
            <BsCartFill className="text-black text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
            )}
          </div>
          </Link>
          <FiUser className="text-black text-2xl cursor-pointer" onClick={toggleUserMenu} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6">
          <ul className="space-y-4 text-center">
            <li><a href="/" className="block hover:text-gray-500">HOME</a></li>
            <li><a href="/shop" className="block hover:text-gray-500">SHOP</a></li>
            <li><a href="#" className="block hover:text-gray-500">CATEGORIES</a></li>
            <li><a href="/about" className="block hover:text-gray-500">ABOUT US</a></li>
          </ul>
        </div>
      )}

      {/* Login & Signup Modals */}
      {showLoginModal && (
        <Login
          onClose={() => setShowLoginModal(false)}
          onSignupClick={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
      )}
      {showSignupModal && (
        <Signup
          onClose={() => setShowSignupModal(false)}
          onLoginClick={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;