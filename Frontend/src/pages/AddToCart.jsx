import React, { useEffect, useState } from "react";
import axios from "axios";

const AddToCart = () => {
  const [cart, setCart] = useState(null);

  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <h2>My Cart</h2>

      {cart?.items?.map((item) => (
        <div key={item.product._id}>
          <h3>{item.product.title}</h3>
          <p>₹{item.product.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>
      ))}
    </>
  );
};

export default AddToCart;
