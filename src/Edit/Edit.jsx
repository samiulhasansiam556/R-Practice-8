import React, { useContext, useState, useEffect } from "react";
import MyContext from "../Context/MyContext";
import { Link, useNavigate } from "react-router-dom";

function Edit(props) {

  const { products, setProducts, editIndex, setEditIndex } = useContext(MyContext);
    
  const [edit, setEdit] = useState({
    // title: "",
    // price: "",
    // brand: "",
  }); 

  useEffect(() => {
    if (editIndex!== null && products[editIndex]) {
      setEdit(products[editIndex]);
    }
  }, [editIndex, products]);

  const editHandle = () => {
    const updatedProducts = products.map((item, index) =>
      index === editIndex? {...item,...edit } : item
    );
    setProducts(updatedProducts);
    setEditIndex(null);
    asd();
  };

  const navigate=useNavigate();

  const asd = ()=>{

     navigate('/')
  }

  const cancelHandle =()=>{
    navigate('/')
  }

  return (

    <>
      
      <div className="p-4 text-green-600 flex flex-col justify-center 
       ml-[40%]  w-[30%] h-[300px]
      bg-black mt-10 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Edit Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editHandle();
        }}
        className="space-y-4"
      >
        <input
          type="text"
          value={edit.title}
          onChange={(e) => setEdit({...edit, title: e.target.value })}
          placeholder="Title"
          className="border p-2 w-full"
        />
        <input
          type="number"
          value={edit.price}
          onChange={(e) => setEdit({...edit, price: e.target.value })}
          placeholder="Price"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={edit.brand}
          onChange={(e) => setEdit({...edit, brand: e.target.value })}
          placeholder="Brand"
          className="border p-2 w-full"
        />
        <div className="flex justify-between">

            <button
         
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded duration-300 hover:text- hover:bg-green-800"

        >
          Update
        </button>
        <button
         
          onClick={cancelHandle}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 duration-300"
        >
          Cancel
        </button>
        </div>
        
      </form>
    </div>
    
    
    </>
   
  );
}

export default Edit;