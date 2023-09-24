import FooterLogo from "../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Youtube from "../assets/shared/desktop/icon-youtube.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import Pinterest from "../assets/shared/desktop/icon-pinterest.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"

export const Footer = () => {
  return (
    <footer className="bg-black mt-20 pb-20 border ">
      <div className="sm:mx-10 lg:mx-16  flex flex-col items-center just gap-10">
        <div className="flex flex-col sm:flex-row items-center w-[95%] sm:w-full sm:justify-between divide-y-[0.2px] sm:divide-y-0 sm:border-b sm:pb-5">
          <div className=" mt-10">
            <img src={FooterLogo} alt="Footer logo" className="w-56" />
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
    </footer>
  );
};
