

import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";

function MyState(props) {
  
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts? JSON.parse(storedProducts) : [];
  });  

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [editIndex,setEditIndex] = useState(null)

  

  
  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        editIndex,
        setEditIndex,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;









// import React, { useState, useEffect } from "react";
// import MyContext from "./MyContext";

// function MyState(props) {

//   const [products, setProducts] = useState([]);

//   const [editIndex,setEditIndex] = useState(null)

//   const [search,setSearch] = useState("")

//   return (
//     <MyContext.Provider value={{ products, setProducts,editIndex,setEditIndex,search,setSearch }}>
//       {props.children}
//     </MyContext.Provider>
//   );
// }

// export default MyState;
