import React from "react";
import ProductList from "./ProductList";
import data from "../utils/MocksAsync.json";
function App() {
  return (
    <div className="App">
      <ProductList products={data.products} />
    </div>
  );
}
export default 