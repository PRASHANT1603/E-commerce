import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    sizes: [],
    description: "",
  });

  const [images, setImages] = useState([]);

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Handle sizes
  const handleSize = (size, checked) => {
    if (checked) {
      setForm({
        ...form,
        sizes: [...form.sizes, { size, stock: 0 }],
      });
    } else {
      setForm({
        ...form,
        sizes: form.sizes.filter((s) => s.size !== size),
      });
    }
  };

  const handleStock = (size, value) => {
    setForm({
      ...form,
      sizes: form.sizes.map((s) =>
        s.size === size ? { ...s, stock: Number(value) } : s,
      ),
    });
  };

  // 🔹 Handle images
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...imageUrls]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("sizes", JSON.stringify(form.sizes)); // important
      formData.append("description", form.description);
      formData.append("stock", form.stock);

      // 🔴 send actual files, not preview
      console.log("[AddProduct] images.length:", images.length);
      images.forEach((img, i) => {
        console.log(
          "[AddProduct] img[" + i + "] file type:",
          typeof img.file,
          img.file?.name,
        );
        formData.append("images", img.file);
      });

      const res = await axios.post(
        "http://localhost:5000/api/products/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      console.log("Product added:", res.data);
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <select name="category" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Shirt">Shirt</option>
          <option value="Jeans">Jeans</option>
          <option value="T-Shirt">T-Shirt</option>
        </select>

        {/* Sizes */}
        <div>
          {["S", "M", "L", "XL"].map((size) => (
            <div
              key={size}
              style={{ display: "flex", gap: "10px", marginBottom: "5px" }}
            >
              <label>
                <input
                  type="checkbox"
                  checked={form.sizes.some((s) => s.size === size)}
                  onChange={(e) => handleSize(size, e.target.checked)}
                />
                {size}
              </label>

              <input
                type="number"
                placeholder="Stock"
                min="0"
                value={form.sizes.find((s) => s.size === size)?.stock || ""}
                onChange={(e) => handleStock(size, e.target.value)}
                style={{ width: "80px" }}
              />
            </div>
          ))}
        </div>

        {/* Image Upload */}
        <input
          type="file"
          name="images"
          multiple
          onChange={handleImageUpload}
        />

        <p>Total Images: {images.length}</p>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.preview}
              alt="preview"
              width="100"
              height="100"
            />
          ))}
        </div>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <label>
          Stock Quantity:
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
