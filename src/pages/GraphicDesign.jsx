import ScrollToTop from "../components/ScrollToTop";
import WebDesignImg from "../assets/home/desktop/image-web-design-large.jpg";
import AppDesignImg from "../assets/home/desktop/image-app-design.jpg";
import changeImg from "../assets/graphic-design/desktop/image-change.jpg";
import boxedWaterImg from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "../assets/graphic-design/desktop/image-science.jpg";
import { ProjectsCard } from "../components/ProjectsCard";
import { BranchCards } from "../components/BranchCards";
import HeaderBgImg from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { Link } from "react-router-dom";

export const GraphicDesign = () => {
  const projects = [
    {
      title: "WEB DESIGN",
      backgroundImg: `${WebDesignImg}`,
      linkTo: "/webDesign",
      className: "",
    },
    {
      title: "APP DESIGN",
      backgroundImg: `${AppDesignImg}`,
      linkTo: "/appDesign",
      className: "",
    },
  ];

  const graphicDesignData = [
    {
      title: "TIM BROWN",
      description:
        "A book cover designed for Tim Brown's new release, 'Change'",
      image: `${changeImg}`,
    },
    {
      title: "BOXED WATER",
      description: "A simple packaging concept made for Boxed Water",
      image: `${boxedWaterImg}`,
    },
    {
      title: "SCIENCE !",
      description:
        "A poster made in collaboration with the Federal Art Project",
      image: `${scienceImg}`,
    },
  ];

  return (
    <div className="sm:mx-10 lg:mx-16">
      <ScrollToTop />
      <section
        className="bg-peach sm:rounded-lg text-white text-center"
        style={{
          backgroundImage: `url('${HeaderBgImg}')`,
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 w-9/10 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl pt-16 pb-8">
            Graphic Design
          </h1>
          <p className="pb-16 w-9/10">
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </p>
        </div>
      </section>

      {/* Web Design Portfolio Section */}
      <section className="mt-24 mx-6 sm:mx-auto grid lg:grid-flow-col  gap-4 justify-center ">
        {graphicDesignData.map((item, index) => (
          <ProjectsCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>

      {/* Branch Cards section */}
      <section className="grid mt-32 gap-6 mx-6 sm:mx-0 lg:grid-cols-2 lg:h-64">
        {projects.map((item, index) => (
          <Link key={index} to={item.linkTo} className={item.className}>
            <BranchCards
              backgroundImg={item.backgroundImg}
              title={item.title}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};
