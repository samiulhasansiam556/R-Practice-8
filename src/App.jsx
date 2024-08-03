import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductTable from "./Component/ProductTable";
import Add from "./Add/Add";
import Edit from "./Edit/Edit";
import MyState from "./Context/MyState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
