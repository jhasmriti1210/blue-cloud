import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
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
      <div className="p-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 p-2 border-r border-gray-300">
            <h4 className="text-center text-xl font-bold mb-4">Filter By Category</h4>
            {categoriesLoading && <p>Loading categories...</p>}
            {error && <p>Error loading categories</p>}
            {!categoriesLoading && !error && (
              <div className="flex flex-col">
                {categories?.map((c) => (
                  <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                    {c.name}
                  </Checkbox>
                ))}
              </div>
            )}
            <button
              className="btn mt-4"
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
          <div className="w-full md:w-3/4 p-2">
            <SearchInput />
            <h1 className="text-center text-2xl font-bold my-4">All Books</h1>
            <div className="flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2 border rounded-lg shadow-md" style={{ width: "18rem" }} key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt={p.name}
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-semibold mb-2">{p.name}</h5>
                    <p className="text-sm mb-2">{p.description.substring(0, 30)}...</p>
                    <p className="text-sm font-semibold mb-2">Rs. {p.price}</p>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-secondary"
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
            <div className="text-center mt-4">
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
    </Layout>
  );
};

export default Store;
