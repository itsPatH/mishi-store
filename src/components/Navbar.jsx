import { useState } from "react";
import CartWidget from "./CartWidget";
import BrandLogo from "../../src/logogato.svg";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4">
      <div className="flex mr-20">
        <img
          src={BrandLogo}
          alt="Logo de la tienda"
          className="w-[80px] h-[80px]"
        />
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center flex-grow">
            <form className="bg-white p-2 h-[20%] w-full rounded-lg">
              <input type="text" />
            </form>
          </div>
          <div className="ml-20 flex items-center justify-end">
            <ul className="flex space-x-4 justify-end">
              <li>
                <button
                  className="text-white text-xl"
                  href=""
                  onClick={() => setShowCategories(!showCategories)}
                >
                  Categorías
                </button>
                {showCategories && (
                  <ul className="absolute bg-white text-xl w-[20%]">
                    <li>
                      <button className="hover:underline">Gatitos</button>
                    </li>
                    <li>
                      <button className="hover:underline">Perritos</button>
                    </li>
                    <li>
                      <button className="hover:underline">Snacks</button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button className="text-white text-xl">Sucursales</button>
              </li>
              <li>
                <button className="text-white text-xl">Contacto</button>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
