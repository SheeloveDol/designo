import HeroImage from "../assets/home/desktop/image-hero-phone.png";
import BgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import AppDesingImg from "../assets/home/desktop/image-app-design.jpg";
import WebDesignImg from "../assets/home/desktop/image-web-design-large.jpg";
import GraphicDesignImg from "../assets/home/desktop/image-graphic-design.jpg";
import { Link } from "react-router-dom";
import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

export const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className={`relative bg-peach text-white text-center sm:rounded-xl`}
        style={{
          backgroundImage: `url('${BgPattern}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "",
        }}
      >
        <div className="lg:flex mx-4 lg:mx-0 lg:pl-20 ">
          <div className="lg:text-left px-5 sm:px-20 lg:px-0 md:pt-8">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl pt-16 leading-10">
              Award-winning custom designs and digital branding solutions
            </h2>
            <p className="mt-10 text-sm sm:text-base text-center lg:text-left leading-7 ">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>

            <Link to="/about">
              <button className="mt-10  p-3 text-black bg-white rounded-md hover:bg-lightPeach hover:text-white">
                LEARN MORE
              </button>
            </Link>
          </div>
          <div className=" ">
            <div
              className="overflow-hidden max-w-[375px] h-[448px] lg:h-[548px] lg:w-96 bg-no-repeat bg-[center_top] lg:bg-[center_top_-3rem] mt-[-5rem] lg:mt-0 mx-auto"
              style={{
                backgroundImage: `url('${HeroImage}')`,
                backgroundSize: "140%",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="mt-32 mx-6 gap-6 grid  lg:grid-cols-2 ">

        {/*Web Design card */}
        <Link to="/webDesign" className="row-span-2">
          <div
            className="h-64 rounded-lg bg-no-repeat bg-cover bg-bottom lg:h-full cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url('${WebDesignImg}')`,
            }}
          >
            <div className="flex flex-col items-center justify-center h-full w-full hover:bg-peach hover:opacity-80">
              <h3 className="text-2xl lg:text-4xl lg:mb-4 text-white ">
                WEB DESIGN
              </h3>
              <div className="flex items-center">
                <p className="text-white text-sm lg:text-xs leading-9 tracking-[0.5rem]">
                  VIEW PROJECTS
                </p>
                <img src={RightArrow} alt="Right arrow" className="h-2 ml-2" />
              </div>
            </div>
          </div>
        </Link>

        {/*App Design Card */}
        <Link to="/appDesign">
          <div
            className="h-64 rounded-lg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url('${AppDesingImg}')`,
            }}
          >
            <div className="flex flex-col items-center justify-center h-full w-full hover:bg-peach hover:opacity-80">
              <h3 className="text-2xl lg:text-4xl lg:mb-4 text-white">
                APP DESIGN
              </h3>
              <div className="flex items-center">
                <p className="text-white text-sm leading-9 tracking-[0.5rem]">
                  VIEW PROJECTS
                </p>
                <img src={RightArrow} alt="Right arrow" className="h-2 ml-2" />
              </div>
            </div>
          </div>
        </Link>

        {/*Graphic Design Card */}
        <Link to="/graphicDesign">
          <div
            className="h-64 rounded-lg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center cursor-pointer overflow-hidden"
            style={{
              backgroundImage: `url('${GraphicDesignImg}')`,
            }}
          >
            <div className="flex flex-col items-center justify-center h-full w-full hover:bg-peach hover:opacity-80">
              <h3 className="text-2xl lg:text-4xl lg:mb-4 text-white">
                GRAPHIC DESIGN
              </h3>
              <div className="flex items-center">
                <p className="text-white text-sm leading-9 tracking-[0.5rem]">
                  VIEW PROJECTS
                </p>
                <img src={RightArrow} alt="Right arrow" className="h-2 ml-2" />
              </div>
            </div>
          </div>
        </Link>

      </section>
    </div>
  );
};

/* 

<div
          className="relative overflow-hidden h-[448px] "
          style={{
            backgroundImage: `url('${HeroImage}')`,
            backgroundPosition: "50% 18%",
          }}
        >
          /* <img 
            src={HeroImage} alt="picture of a cellular phone" 
            className='absolute  mx-auto w-[600px] '
          /> *
          
          </div>

*/
