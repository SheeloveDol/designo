/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";
import FooterLogo from "../assets/shared/desktop/logo-light.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Youtube from "../assets/shared/desktop/icon-youtube.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";
import Pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import CtaBackgroundImg from "../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg"

export const Footer = () => {
  const location = useLocation();

  const pathStyles = {
    "/contact": {
      backgroundColor: "red",
      paddingTop: "8rem",
    },
  };

  const currentPath = location.pathname;

  const style = pathStyles[currentPath] || {};

  //TODO: Continue to figure out how to conditionally render the CONTACT component. On the right path
  //TODO: Keep everything in the footer?
  //TODO: Footer needs to be have 3 main boxes? Top is white, bottome black and middle peach.

  return (
    <footer
      style={{ ...style }}
      className="bg-black border-none mt-20 pb-20 relative"
    >
      <div className="bg-white py-16 pt-28 sm:pt-44 relative"></div>

      <div className="text-center text-white py-8 lg:py-16 px-4  absolute top-3 w-[90%] left-[5%] bg-peach rounded-lg z-10 lg:flex justify-between lg:px-16 lg:text-left"
      style={{
        backgroundImage: `url('${CtaBackgroundImg}')`,
        
        backgroundPosition: "center"
      }}
      
      >
        <div className="sm:mx-auto lg:mx-0 sm:w-3/4 lg:w-1/2">
          <h3 className="mb-6 text-2xl">
            Let's talk about<br></br> your project
          </h3>
          <p className="mb-6 ">
            Ready to take it to the next level? Contact us today and find out how
            our expertise can help your business grow.
          </p>
        </div>
        <button className="text-black bg-lightGrey p-4 rounded-lg lg:flex-none h-14 self-center hover:bg-lightPeach hover:text-white">
          GET IN TOUCH
        </button>
      </div>

      <div>
        <div className="sm:mx-10 lg:mx-16 pt-36 sm:pt-20  flex flex-col items-center just gap-10">
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
      </div>
    </footer>
  );
};
