/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const MobileMenuModal = ({ open, handleMenuItemClick }) => {
  return (
    <div
      className={
        open ? `sm:hidden absolute top-[4.5rem] h-full w-full` : `hidden`
      }
    >
      <nav>
        <ul className="pl-6 py-12 text-white bg-black">
          <li
            onClick={handleMenuItemClick}
            className="pb-5 text-xl cursor-pointer"
          >
            <Link to="/about">OUR  COMPANY</Link>
          </li>
          <li
            onClick={handleMenuItemClick}
            className="pb-5 text-xl cursor-pointer"
          >
            <Link to="/locations">LOCATIONS</Link>
          </li>
          <li onClick={handleMenuItemClick} className="text-xl cursor-pointer">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="h-[120rem] bg-black opacity-40"></div>
    </div>
  );
};
