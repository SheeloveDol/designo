/* eslint-disable react/no-unescaped-entities */
import ScrollToTop from "../components/ScrollToTop";
import HeroImage from "../assets/home/desktop/image-hero-phone.png";
import BgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import AppDesignImg from "../assets/home/desktop/image-app-design.jpg";
import WebDesignImg from "../assets/home/desktop/image-web-design-large.jpg";
import GraphicDesignImg from "../assets/home/desktop/image-graphic-design.jpg";
import { Link } from "react-router-dom";
import PassionateImg from "../assets/home/desktop/illustration-passionate.svg";
import ResourcefulImg from "../assets/home/desktop/illustration-resourceful.svg";
import FriendlyImg from "../assets/home/desktop/illustration-friendly.svg";
import SmallCircle from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import { BranchCards } from "../components/BranchCards";
import { CoreValuesCard } from "../components/CoreValuesCard";

export const Home = () => {
  // For project cards array
  const projects = [
    {
      title: "WEB DESIGN",
      backgroundImg: `${WebDesignImg}`,
      linkTo: "/webDesign",
      className: 'row-span-2',
    },
    {
      title: "APP DESIGN",
      backgroundImg: `${AppDesignImg}`,
      linkTo: '/appDesign',
      className: "",
    },
    {
      title: "GRAPHIC DESIGN",
      backgroundImg: `${GraphicDesignImg}`,
      linkTo: "/graphicDesign",
      className: "",
    },
  ];

  // Core Values array
  const coreValues = [
    {
      title: "PASSIONATE",
      statement:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      backgroundImage: `${SmallCircle}`,
      image: `${PassionateImg}`,
      bgImgRotation: "",
      transform: "",
    },
    {
      title: "RESOURCEFUL",
      statement:
        "Everything we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
      backgroundImage: `${SmallCircle}`,
      image: `${ResourcefulImg}`,
      bgImgRotation: "-rotate-180",
      transform: "rotate(180deg)",
    },
    {
      title: "FRIENDLY",
      statement:
        "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      backgroundImage: `${SmallCircle}`,
      image: `${FriendlyImg}`,
      bgImgRotation: "-rotate-90",
      transform: "rotate(90deg)",
    },
  ];

  return (
    <div className="sm:mx-10 lg:mx-16">
      <ScrollToTop />
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
          <div className="lg:flex mx-4 lg:mx-0 lg:pl-20xnxx">
            <div className="lg:text-left px-5 sm:px-20 lg:px-0 md:pt-8 lg:pl-20 lg:pr-28 ">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl pt-16  leading-10">
                Award-winning custom designs and digital branding solutions
              </h2>
              <p className="mt-10 text-sm sm:text-base text-center lg:text-left leading-7">
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

        <section className="mt-32 lg:h-96 mx-6 sm:mx-0 gap-6 grid  lg:grid-cols-2 ">
          {/*Web Design card */}
          {projects.map((item, index) => (
            <Link key={index} to={item.linkTo} className={item.className}>
              <BranchCards
                backgroundImg={item.backgroundImg}
                title={item.title}
              />
            </Link>
          ))}
        </section>

        {/*----------CORE VALUES SECTION----------- */}

        <section className="mt-32 mx-6 lg:mx-0 flex flex-col lg:flex-row gap-20 justify-center items-center">
          {coreValues.map((item, index) => (
            <CoreValuesCard
              key={index}
              title={item.title}
              statement={item.statement}
              image={item.image}
              backgroundImage={item.backgroundImage}
              bgImgRotation={item.bgImgRotation}
              transform={item.transform}
            />
          ))}
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
