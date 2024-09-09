import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css"; // You can remove this if not using custom styles

const CartPage = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const [clientToken, setClientToken] = useState("");
    const [instance, setInstance] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // total price
    const totalPrice = () => {
        try {
            let total = 0;
            cart?.forEach((item) => {
                total += item.price;
            });

            // Format the total amount according to the Indian locale without a currency symbol
            const formattedTotal = total.toLocaleString("en-IN");

            // Manually add the rupee symbol
            return `₹${formattedTotal}`;
        } catch (error) {
            console.log(error);
        }
    };

    //detele item
    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    };

    //get payment gateway token
    const getToken = async () => {
        try {
            const { data } = await axios.get("/api/v1/product/braintree/token");
            setClientToken(data?.clientToken);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getToken();
    }, [auth?.token]);

    //handle payments
    const handlePayment = async () => {
        try {
            setLoading(true);
            const { nonce } = await instance.requestPaymentMethod();
            const { data } = await axios.post("/api/v1/product/braintree/payment", {
                nonce,
                cart,
            });
            setLoading(false);
            localStorage.removeItem("cart");
            setCart([]);
            navigate("/dashboard/user/orders");
            toast.success("Payment Completed Successfully ");
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <Layout>
            <div className="container mx-auto p-4">
                <div className="bg-gray-100 rounded-lg shadow-md p-4">
                    <h1 className="text-center text-2xl font-bold mb-2">
                        {!auth?.user
                            ? "Hello Guest"
                            : `Hello ${auth?.token && auth?.user?.name}`}
                    </h1>
                    <p className="text-center text-lg mb-4">
                        {cart?.length
                            ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout!"}`
                            : "Your Cart Is Empty"}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            {cart?.map((p) => (
                                <div className="flex bg-white shadow-lg rounded-lg overflow-hidden p-4" key={p._id}>
                                    <div className="w-1/3">
                                        <img
                                            src={`/api/v1/product/product-photo/${p._id}`}
                                            className="w-full h-32 object-cover"
                                            alt={p.name}
                                        />
                                    </div>
                                    <div className="w-2/3 px-4">
                                        <p className="text-lg font-semibold">{p.name}</p>
                                        <p className="text-sm text-gray-600">{p.description.substring(0, 30)}</p>
                                        <p className="text-xl font-bold">Price: {p.price}</p>
                                        <button
                                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => removeCartItem(p._id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                            <p className="text-lg mb-4">Total | Checkout | Payment</p>
                            <hr className="mb-4" />
                            <h4 className="text-2xl font-bold mb-4">Total: {totalPrice()}</h4>
                            {auth?.user?.address ? (
                                <>
                                    <div className="mb-4">
                                        <h4 className="text-lg font-semibold">Current Address</h4>
                                        <h5 className="text-md">{auth?.user?.address}</h5>
                                        <button
                                            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                            onClick={() => navigate("/dashboard/user/profile")}
                                        >
                                            Update Address
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="mb-4">
                                    {auth?.token ? (
                                        <button
                                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                            onClick={() => navigate("/dashboard/user/profile")}
                                        >
                                            Update Address
                                        </button>
                                    ) : (
                                        <button
                                            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                            onClick={() =>
                                                navigate("/login", {
                                                    state: "/cart",
                                                })
                                            }
                                        >
                                            Please Login to Checkout
                                        </button>
                                    )}
                                </div>
                            )}
                            <div className="mt-4">
                                {!clientToken || !auth?.token || !cart?.length ? (
                                    ""
                                ) : (
                                    <>
                                        <DropIn
                                            options={{
                                                authorization: clientToken,
                                                paypal: {
                                                    flow: "vault",
                                                },
                                            }}
                                            onInstance={(instance) => setInstance(instance)}
                                        />
                                        <button
                                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            onClick={handlePayment}
                                            disabled={loading || !instance || !auth?.user?.address}
                                        >
                                            {loading ? "Processing ...." : "Make Payment"}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
