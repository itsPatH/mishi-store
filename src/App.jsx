import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cards from "./components/Cards"
import products from "./utils/MocksAsync.json"

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a la Mishi Store" />
    </>
   // <ItemList/>
  );
}

export default App;
