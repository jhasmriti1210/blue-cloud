import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Layout, Badge } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useCart } from "../../context/cart";

const Header = () => {
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <Layout>
      {/* Main Navbar */}
      <nav className="font-medium text-black bg-white h-20 shadow-md">
        <div className="container mx-auto px-4 md:px-24">
          <div className="flex justify-center items-center py-2 -mt-8 md:-mt-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="../logo/logo1.png"
                  alt="Brand-logo"
                  className="h-32 md:h-30 lg:h-40 w-auto "
                />
              </Link>
            </div>

            {/* Hamburger Menu Button for Small Screens */}
            <div className="md:hidden flex items-center ml-28">
              <button
                className="focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <IoMdClose className="h-6 w-6 text-black" />
                ) : (
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Navbar Content */}
            <div className="flex-grow flex justify-center items-center">
              {/* Navbar Links for Medium Screens */}
              <div className="hidden md:flex flex-grow justify-center space-x-8 items-center">
                <Link to="/" className="md:text-xl">Home</Link>
                <Link to="/store" className="md:text-xl">Stores</Link>
                <Link to="/" className="md:text-xl">Packages</Link>
                <Link to="/testimonial" className="md:text-xl">Testimonials</Link>
                <Link to="/about-us" className="md:text-xl">About</Link>
                <Link to="/contact-us" className="md:text-xl">Contact Us</Link>
              </div>
            </div>

            {/* Right side icons */}
            <div className="hidden md:flex items-center space-x-10">
              {!auth.user ? (
                <Link
                  to="/login"
                  className="md:text-xl font-serif bg-blue-900 text-white px-4 py-2 rounded-lg border border-gray-200"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Login/Register
                </Link>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="text-xl font-serif bg-blue-900 text-white px-4 py-2 rounded-lg border border-gray-200"
                  >
                    {auth.user.name}
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-300">
                      <li>
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              )}
              {auth.user?.role !== 1 && (
                <Badge count={cart?.length} showZero>
                  <Link to="/cart">
                    <FaShoppingCart className="text-2xl" />
                  </Link>
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu for Small Screens */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900 text-white absolute top-0 left-0 w-full p-5">
            {/* Close button */}
            <div className="flex justify-end">
              <button
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoMdClose className="h-6 w-6" />
              </button>
            </div>
            {/* Navbar Links for Small Screens */}
            <div className="flex flex-col items-start -mt-8 space-y-4">
              <Link to="/" className="text-xl" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/store" className="text-xl" onClick={() => setIsMenuOpen(false)}>
                Stores
              </Link>
              <Link to="/" className="text-xl" onClick={() => setIsMenuOpen(false)}>
                Packages
              </Link>
              <Link to="/testimonial" className="text-xl" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link to="/about-us" className="text-xl" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact-us" className="text-xl" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>

              <div className="md:flex items-center space-x-10">
                {!auth.user ? (
                  <Link
                    to="/login"
                    className="md:text-xl font-serif bg-white text-blue-900 px-4 py-2 rounded-lg border border-gray-200 font-bold"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Login/Register
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-xl font-serif bg-blue-900 text-white px-4 py-2 rounded-lg border border-gray-200"
                    >
                      {auth.user.name}
                    </button>
                    {isDropdownOpen && (
                      <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 border border-gray-300">
                        <li>
                          <Link
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                )}
                {auth.user?.role !== 1 && (
                  <Badge count={cart?.length} showZero>
                    <Link to="/cart">
                      <FaShoppingCart className="text-2xl" />
                    </Link>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>


    </Layout>
  );
};

export default Header;
