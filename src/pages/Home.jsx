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
      <div className="lg:flex">
        <div className="lg:text-left lg:px-16">
          <h2 className="text-3xl lg:text-4xl lg:pr-56 pt-16 border-2">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="mt-10 text-sm text-center lg:text-left lg:pr-56">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand experiences.
            Find out more about our services.
          </p>
          <button className="mt-10  p-3 text-black bg-white rounded-md">
            LEARN MORE
          </button>
        </div>
        <div
          className="relative overflow-hidden h-[28rem]   "
          
        >
          <img 
            src={HeroImage} alt="picture of a cellular phone" 
            className='relative bottom-16 w-full mx-auto border'
          />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
