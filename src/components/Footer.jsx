/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";
import FooterLogo from "../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Youtube from "../assets/shared/desktop/icon-youtube.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import { CallToAction } from "./CallToAction";

export const Footer = () => {
  const location = useLocation();

  const pathStyles = {
    "/contact": {
      paddingTop: "1rem",
    },
  };

  const currentPath = location.pathname;

  const style = pathStyles[currentPath] || {};

  //TODO: must come back to conditionally resize footer once contact page is done.

  return (
    <footer
      style={{ ...style }}
      className="bg-black border-none mt-20 pb-20 relative target:bg-peach"
    >
      {currentPath != "/contact" && (
        <div className="bg-white py-16 pt-28 sm:pt-44 relative"></div>
      )}

      <div>{currentPath != "/contact" && <CallToAction />}</div>

      <div>
        <div
          style={{ ...style }}
          className="sm:mx-10 lg:mx-16 pt-36 sm:pt-20 flex flex-col items-center gap-10"
        >
          <div className="flex flex-col sm:flex-row items-center w-[95%] sm:w-full sm:justify-between divide-y-[0.2px] sm:divide-y-0 sm:border-b sm:pb-5">
            <div className=" mt-10">
              <Link to="/">
                <img src={FooterLogo} alt="Footer logo" className="w-56" />
              </Link>
            </div>
            <nav className="mt-8 pt-8 sm:w-3/5 md:w-1/2 lg:w-2/5 w-full">
              <ul className="sm:flex sm:justify-between text-white ">
                <li className="mb-6 text-center">
                  <Link to="/about">OUR COMPANY</Link>
                </li>
                <li className="mb-6 text-center">
                  <Link to="/locations">LOCATIONS</Link>
                </li>
                <li className="text-center">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex gap-10 flex-col sm:flex-row sm:justify-between w-full">
            <div className=" text-center sm:text-left">
              <h3>Designo Central Office</h3>
              <p>3886 Wellington Street</p>
              <p>Toronto, Onntario M9C 3J5 </p>
            </div>
            <div className="text-center sm:text-left">
              <h3>Contact US (Central Office)</h3>
              <p>P: +1 253-863-8967</p>
              <p>M: contact@designo.co</p>
            </div>
            <div className="flex justify-between h-7 w-44 self-center sm:self-end">
              <img src={Facebook} alt="" />
              <img src={Youtube} alt="" />
              <img src={Twitter} alt="" />
              <img src={Pinterest} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
