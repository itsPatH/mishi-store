/*import React from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed-top-0 left-0 h-screen p-2 bg-cyan-500">
      <ul className="p-5 space-y-8">
        <li>
          <button>
            <HiOutlineMenuAlt2 size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button>
            <IoHeartOutline size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button>
            <HiOutlineHome size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button>
            <CiShoppingCart size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button>
            <CiDeliveryTruck size={"1.5rem"} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
*/
import React from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen p-2 bg-cyan-500">
      <ul className="p-5 space-y-8">
        <li>
          <button className="flex items-center justify-center">
            <HiOutlineMenuAlt2 size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button className="flex items-center justify-center">
            <IoHeartOutline size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button className="flex items-center justify-center">
            <HiOutlineHome size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button className="flex items-center justify-center">
            <CiShoppingCart size={"1.5rem"} />
          </button>
        </li>

        <li>
          <button className="flex items-center justify-center">
            <CiDeliveryTruck size={"1.5rem"} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
