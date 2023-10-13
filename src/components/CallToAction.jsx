/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import CtaBackgroundImg from "../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";

export const CallToAction = () => {
  return (
    <div>
      <div
        className="text-center text-white py-8 lg:py-16 px-4  absolute top-3 w-[90%] left-[5%] bg-peach rounded-lg z-10 lg:flex justify-between lg:px-16 lg:text-left"
        style={{
          backgroundImage: `url('${CtaBackgroundImg}')`,

          backgroundPosition: "center",
        }}
      >
        <div className="sm:mx-auto lg:mx-0 sm:w-3/4 lg:w-1/2">
          <h3 className="mb-6 text-2xl">
            Let's talk about<br></br> your project
          </h3>
          <p className="mb-6 ">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        <Link to="/contact">
          <button className="text-black bg-lightGrey p-4 rounded-lg lg:flex-none h-14 self-center hover:bg-lightPeach hover:text-white">
            GET IN TOUCH
          </button>
        </Link>
      </div>
    </div>
  );
};
