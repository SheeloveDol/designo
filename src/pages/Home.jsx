import HeroImage from "../assets/home/desktop/image-hero-phone.png";
import BgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";

export const Home = () => {
  return (
    <div
      className={`relative bg-peach text-white text-center `}
      style={{
        backgroundImage: `url('${BgPattern}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "",
      }}
    >
      <div className="lg:flex mx-4 lg:px-16">
        <div className="lg:text-left lg:mt-20 md:mx-16 md:pt-8 ">
          <h2 className="text-3xl md:text-4xl  pt-16 border">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="mt-10 text-sm text-center lg:text-left  ">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand experiences.
            Find out more about our services.
          </p>
          <button className="mt-10  p-3 text-black bg-white rounded-md">
            LEARN MORE 
          </button>
        </div>
        <div
          className="overflow-hidden h-[448px] border lg:h-[600px] px-auto w-full bg-[center_top_-5rem]  lg:bg-top"
          style={{
            backgroundImage: `url('${HeroImage}')`,
            
          }}
         
        >
           {/* <img 
            src={HeroImage} alt="picture of a cellular phone " 
            className='  max-w-[500px] border '
          />  */}
          
          </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
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