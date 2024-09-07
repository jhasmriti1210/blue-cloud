/*import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";  // Move this to the top
import { Checkbox } from "antd";  // Move this to the top
import "../styles/Store.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Footer from "../components/Layout/Footer";
import SearchInput from "../components/Form/SearchInput";
import useCategory from "../hooks/useCategory"; // Move this to the top

const Store = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const resetbuttonStyles = {
    fontFamily: "serif",
    fontSize: "0.8rem",
    fontWeight: 500,
    color: isHovered ? "black" : "white",
    backgroundColor: isHovered ? "#ffbf00" : "black", // Change color on hover
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    margin: "8px 5px",
    cursor: "pointer",

  };
  // Use the custom hook to get categories
  const { categories, loading: categoriesLoading, error } = useCategory();

  useEffect(() => {
    getTotal();
  }, []);

  // Get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Load more products
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts((prevProducts) => [...prevProducts, ...data?.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Filter by category
  const handleFilter = (value, id) => {
    const all = value ? [...checked, id] : checked.filter((c) => c !== id);
    setChecked(all);
  };

  // Get filtered products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", { checked, radio });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!checked.length && !radio.length) {
      getAllProducts();
    } else {
      filterProduct();
    }
  }, [checked, radio]);

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="app">
        <div className="content">
          <div className="row mt-3">
            <div className="col-md-2">
              <h4 className="text-center">Filter By Category</h4>
              {categoriesLoading && <p>Loading categories...</p>}
              {error && <p>Error loading categories</p>}
              {!categoriesLoading && !error && (
                <div className="d-flex flex-column">
                  {categories?.map((c) => (
                    <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
              )}
              <div className="d-flex flex-column">
                <button className="btn" style={resetbuttonStyles} onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)} onClick={() => window.location.reload()}>RESET FILTERS</button>
              </div>
            </div>
            <div className="col-md-9">
              <SearchInput />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-8 ">
              <h1 className="text-center ">All Books</h1>
              <div className="d-flex flex-wrap">
                {products?.map((p) => (
                  <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description.substring(0, 30)}...</p>
                      <p className="card-text">Rs. {p.price}</p>
                      <button className="btn btn-primary ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                      <button className="btn btn-secondary ms-1" onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem("cart", JSON.stringify([...cart, p]));
                        toast.success("Item added to cart");
                      }}>Add To Cart</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="m-2 p-3">
                {products && products.length < total && (
                  <button className="btn btn-warning" onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}>
                    {loading ? "Loading ..." : "Load More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Store;*/

import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Checkbox } from "antd";
import "../styles/Store.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Footer from "../components/Layout/Footer";
import SearchInput from "../components/Form/SearchInput";
import useCategory from "../hooks/useCategory";

const Store = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const resetbuttonStyles = {
    fontFamily: "serif",
    fontSize: "0.8rem",
    fontWeight: 500,
    color: isHovered ? "black" : "white",
    backgroundColor: isHovered ? "#ffbf00" : "black",
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    margin: "8px 5px",
    cursor: "pointer",
  };

  const { categories, loading: categoriesLoading, error } = useCategory();

  useEffect(() => {
    getTotal();
    getAllProducts();
  }, []);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
      setAllProducts(data.products); // Store all products initially
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts((prevProducts) => [...prevProducts, ...data?.products]);
      setAllProducts((prevProducts) => [...prevProducts, ...data?.products]); // Update allProducts as well
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const handleFilter = (value, id) => {
    const all = value ? [...checked, id] : checked.filter((c) => c !== id);
    setChecked(all);
  };

  const filterProduct = async () => {
    if (checked.length) {
      try {
        const { data } = await axios.post("/api/v1/product/product-filters", { checked, radio });
        setProducts(data?.products);
      } catch (error) {
        console.log(error);
      }
    } else {
      setProducts(allProducts); // Show all products when no category is selected
    }
  };

  useEffect(() => {
    filterProduct();
  }, [checked, radio]);

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="app">
        <div className="content">
          <div className="row mt-3">
            <div className="col-md-2">
              <h4 className="text-center">Filter By Category</h4>
              {categoriesLoading && <p>Loading categories...</p>}
              {error && <p>Error loading categories</p>}
              {!categoriesLoading && !error && (
                <div className="d-flex flex-column">
                  {categories?.map((c) => (
                    <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
              )}
              <div className="d-flex flex-column">
                <button
                  className="btn"
                  style={resetbuttonStyles}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => {
                    setChecked([]);
                    setProducts(allProducts); // Reset filters to show all products
                  }}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <SearchInput />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <h1 className="text-center ">All Books</h1>
              <div className="d-flex flex-wrap">
                {products?.map((p) => (
                  <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description.substring(0, 30)}...</p>
                      <p className="card-text">Rs. {p.price}</p>
                      <button
                        className="btn btn-primary ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-secondary ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem("cart", JSON.stringify([...cart, p]));
                          toast.success("Item added to cart");
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="m-2 p-3">
                {products.length && products.length < total && (
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(page + 1);
                    }}
                  >
                    {loading ? "Loading ..." : "Load More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Store;
