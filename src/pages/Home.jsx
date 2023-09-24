/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../assets/home/desktop/image-hero-phone.png";
import BgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import AppDesingImg from "../assets/home/desktop/image-app-design.jpg";
import WebDesignImg from "../assets/home/desktop/image-web-design-large.jpg";
import GraphicDesignImg from "../assets/home/desktop/image-graphic-design.jpg";
import { Link } from "react-router-dom";
import PassionateImg from "../assets/home/desktop/illustration-passionate.svg";
import ResourcefulImg from "../assets/home/desktop/illustration-resourceful.svg";
import FriendlyImg from "../assets/home/desktop/illustration-friendly.svg";
import SmallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import { ProjectsCard } from "../components/ProjectsCard";

export const Home = () => {
  return (
    <div className="sm:mx-10 lg:mx-16 ">
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
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
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

        {/* -----------PROJECTS SECTION ------------*/}

        <section className="mt-32 mx-6 sm:mx-0 gap-6 grid  lg:grid-cols-2 ">
          {/*Web Design card */}
          <Link to="/webDesign" className="row-span-2">
            <ProjectsCard props={WebDesignImg} />
          </Link>

          {/*App Design Card */}
          <Link to="/appDesign">
            <ProjectsCard props={AppDesingImg} />
          </Link>

          {/*Graphic Design Card */}
          <Link to="/graphicDesign">
            <ProjectsCard props={GraphicDesignImg} />
          </Link>
        </section>

        {/*----------CORE VALUES SECTION----------- */}

        <section className="mt-32 mx-6 flex flex-col lg:flex-row gap-20 justify-center items-center">
          <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-6 items-center justify-center">
            <div
              style={{ backgroundImage: `url('${SmallCircle}')` }}
              className="bg-no-repeat inline-block min-w-[202px] h-[202px]"
            >
              <img src={PassionateImg} className="" />
            </div>
            <div className="text-center sm:text-left lg:text-center">
              <h3 className="text-3xl text-black py-10 sm:py-4 tracking-[0.4rem]">
                PASSIONATE
              </h3>
              <p className="text-black leading-6">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-6 items-center justify-center">
            <div
              style={{
                backgroundImage: `url('${SmallCircle}')`,
                transform: "rotate(180deg)",
              }}
              className="bg-no-repeat inline-block min-w-[202px] h-[202px]"
            >
              <img src={ResourcefulImg} className="-rotate-180" />
            </div>
            <div className="text-center sm:text-left lg:text-center">
              <h3 className="text-3xl text-black py-10 sm:py-4 tracking-[0.4rem]">
                RESOURCEFUL
              </h3>
              <p className="text-black leading-6">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees a superior results that fulfill our
                clients' needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-6 items-center justify-center">
            <div
              style={{
                backgroundImage: `url('${SmallCircle}')`,
                transform: "rotate(90deg)",
              }}
              className="bg-no-repeat inline-block min-w-[202px] h-[202px]"
            >
              <img src={FriendlyImg} className="-rotate-90" />
            </div>
            <div className="text-center sm:text-left lg:text-center">
              <h3 className="text-3xl text-black py-10 sm:py-4 tracking-[0.4rem]">
                FRIENDLY
              </h3>
              <p className="text-black leading-6">
                We are a group of enthusiatic folks who know how to put people
                first. our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </section>
      </div>
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
