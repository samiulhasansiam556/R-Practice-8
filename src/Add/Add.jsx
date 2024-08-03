import React, { useContext, useState } from "react";
import MyContext from "../Context/MyContext";
import { Link } from "react-router-dom";

const Add = () => {

  const { products, setProducts } = useContext(MyContext);
  
  const [newProduct, setNewProduct] = useState({
    // title: "",
    // price: "",
    // brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const addProduct = () => {
    const isDuplicare = products.some((item) =>
       item.title === newProduct.title
    );
    if (isDuplicare) {
      alert("Product with the same title already exists!");
    } else {
      setProducts([...products, newProduct]);
      setNewProduct({ title: "", price: "", brand: "" });
    }
  };

  return (
    <div
      className="p-4 w-[40%] ml-[30%] bg-black mt-[4%] h-[400px] 
        shadow-[rgba(0,0,15,0.5)_1px_5px_4px_2px]"
    >
      <h1 className="text-2xl text-center mb-4 text-blue-600">Add Products</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct();
        }}
        className="space-y-4"
      >
        <input
          required
          minLength="5"
          maxLength="50"
          type="text"
          placeholder="Title"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          required
          type="number"
          min="5"
          max="10"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          minLength="5"
          maxLength="50"
          required
          type="text"
          placeholder="Brand"
          name="brand"
          value={newProduct.brand}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
        <Link
          to="/"
          className="text-blue-500 hover:underline mb-4 inline-block ml-[80%]"
        >
          Back
        </Link>
      </form>
    </div>
  );
};

export default Add;
