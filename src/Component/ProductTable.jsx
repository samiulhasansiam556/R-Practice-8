import  { useContext, useState, useEffect } from "react";
import MyContext from "../Context/MyContext";
import { Link } from "react-router-dom";

function ProductTable(props) {
  
  const { products, setProducts,setEditIndex } = useContext(MyContext);
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search,setSearch] = useState("")

  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const deleteProduct = (id) => {
    setProducts(products.filter((item, i) => i !== id));
  };

  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-4 w-[60%] ml-[20%] bg-black">
      <div className="flex justify-between h-8">
        <input
          type="text"
          className="border p-2  border-black"
          onChange={searchHandle}
          placeholder="Search"
          value={search}
        />
        <h2 className="text-blue-500 text-2xl font-bold">CRUD APP</h2>
        <Link to="/Add">
          <button className="bg-white text-blue-800 px-2 py-1 font-bold">
            Add Product
          </button>
        </Link>
      </div>

      <table className="min-w-full bg-white border border-gray-200 mt-5">
        <thead>
          <tr className="w-full bg-gray-100 text-center text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-4 border-b ">Product</th>
            <th className="py-3 px-4 border-b">Price</th>
            <th className="py-3 px-4 border-b">Brand</th>
            <th className="py-3 px-4 border-b">Action</th>
            <th className="py-3 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 text-center">
              <td className="py-3 px-4 border-b">{item.title}</td>
              <td className="py-3 px-4 border-b">{item.price}</td>
              <td className="py-3 px-4 border-b">{item.brand}</td>
              <td className="py-3 px-4 border-b">
                <button
                  onClick={() => deleteProduct(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
              <td className="py-3 px-4 border-b">
                <Link to="/Edit">
                  <button
                    onClick={() => setEditIndex(index)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
