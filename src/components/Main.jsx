import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import pelotita from "../assets/pelotita.jpg";
import pescadito from "../assets/pescadito.jpg";
import ratoncitos from "../assets/ratoncitos.jpg";
import serpiente from "../assets/serpiente.jpg";
import huesito from "../assets/huesito.jpg";
import discoperro from "../assets/discoperro.jpg";
import lanzapelotas from "../assets/lanzapelotas.jpg";
import galletasgatos from "../assets/galletasgatos.jpg";
import galletasperros from "../assets/galletasperros.jpg";

const Main = () => {
  let Products = [
    {
      img: pelotita,
      title: "Pelotita para gatos",
      description:
        "Pelota de plástico con un ratoncito de peluche en su interior.",
      price: 1.49,
    },
    {
      img: pescadito,
      title: "Pescadito para gatos",
      description: "Pescado de juguete para gatos con carga USB y catnip.",
      price: 3.99,
    },
    {
      img: ratoncitos,
      title: "Ratoncitos para gatos",
      description:
        "Ratoncitos de peluche para gatos con catnip en su interior.",
      price: 0.99,
    },
    {
      img: serpiente,
      title: "Serpientes para gatos",
      description: "Serpientes de juguete para gatos rellenas de catnip.",
      price: 4.99,
    },
    {
      img: huesito,
      title: "Huesos para cachorros",
      description: "Huesos de hule para el entrenamiento de cachorros.",
      price: 2.99,
    },
    {
      img: discoperro,
      title: "Disco para perros",
      description: "Disco de hule para entrenamiento de perros.",
      price: 3.99,
    },
    {
      img: lanzapelotas,
      title: "Lanzapelotas perros",
      description:
        "Pequeña máquina que arroja pelotas para el entrenamiento de perros.",
      price: 30.99,
    },
    {
      img: galletasgatos,
      title: "Galletas para gatos",
      description:
        "Galletas a base de ingredientes naturales y proteicos para gatos.",
      price: 4.99,
    },
    {
      img: galletasperros,
      title: "Galletas para perros",
      description:
        "Galletas a base de ingredientes naturales y proteicos para perros.",
      price: 4.99,
    },
  ];
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const searchHandler = (e) => {
    const filteredArray = Products.filter((product) =>
      product.title.toLocaleLowerCase().includes(e.target.value)
    );
    if (filteredArray.length != 0) {
      setFilteredProducts(filteredArray);
    }
  };

  return (
    <div className="w-full relative">
      <div className="sticky top-0 z-10">
        <div className="header flex justify-between items-center p-4 bg-white">
          <h1 className="text-3xl font-bold p-2">Mishi Store</h1>
          <div>
            <div className="search flex justify-between items-center px-5 py-2 bg-sky-100 rounded-full">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="bg-transparent outline-0 focus:outline-none"
                onChange={searchHandler}
              />
              <button onClick={() => searchHandler}>
                <CiSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="categories w-full flex justify-between space-x-8 px-2 py-10">
          <div className="bg-sky-400 text-white rounded-full drop-shadow-xl w-20 h-7 text-center">
            <p>Gatitos</p>
          </div>
          <div className="bg-sky-400 text-white rounded-full drop-shadow-xl w-20 h-7 text-center">
            <p>Perritos</p>
          </div>
          <div className="bg-sky-400 text-white rounded-full drop-shadow-xl w-20 h-7 text-center">
            <p>Snacks</p>
          </div>
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts &&
          filteredProducts.map((product, idx) => {
            return (
              <div
                key={idx}
                className="product h-500px bg-white drop-shadow-2xl p-2 border rounded"
              >
                <img
                  src={product.img}
                  alt="Imagen del producto"
                  className="w-full h-[60%] object-cover p-2"
                />
                <div className="m-2 bg-white">
                  <h1 className="text-xl font-semibold text-center">
                    {product.title}
                  </h1>
                  <p className="text-s text-justify">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">${product.price}</p>
                    <FaCartShopping size={"1.4rem"} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Main;
