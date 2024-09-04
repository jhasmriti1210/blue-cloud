import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Layout, Badge } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/cart";


const Header = () => {
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav className="navbar navbar-expand-lg shadow fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img src="../logo/logo1.png" alt="Brand-logo" className="image" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Laptop navbar */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Stores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonial">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact</Link>
              </li>
              {!auth.user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Login/Register</Link>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {auth.user.name.charAt(0).toUpperCase()}
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}>Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/" onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </li>
              )}
              {auth.user?.role !== 1 && (
                <li className="nav-item">
                  <Badge count={cart?.length} showZero className="profile-badge">
                    <Link className="nav-link" to="/cart"><FaShoppingCart className="carticon" /></Link>
                  </Badge>
                </li>
              )}
            </ul>
          </div>

          {/* Mobile navbar */}
          <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Stores</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/testimonial">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact</Link>
              </li>
              {!auth.user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Login/Register</Link>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {auth.user.name.charAt(0).toUpperCase()}
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}>Dashboard</Link></li>
                    <li><Link className="dropdown-item" to="/" onClick={handleLogout}>Logout</Link></li>
                  </ul>
                </li>
              )}
              {auth.user?.role !== 1 && (
                <li className="nav-item">
                  <Badge count={cart?.length} showZero className="profile-badge">
                    <Link className="nav-link" to="/cart"><FaShoppingCart className="carticon" /></Link>
                  </Badge>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Layout>
  );
};

export default Header;
