import React, { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/landing");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px"
            }}
          >
            {/* IMAGE */}
            <img
              src={item.images?.[0]}
              alt={item.title}
              width="100%"
              height="150"
              style={{ objectFit: "cover" }}
            />

            <h4>{item.title}</h4>
            <p>₹{item.price}</p>

            {/* SIZES */}
            <p>
              Sizes:
              {item.sizes?.length > 0
                ? item.sizes.map((s, i) => (
                    <span key={i}>
                      {s.size} ({s.stock})
                    </span>
                  ))
                : " Not available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;