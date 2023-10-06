import WebDesignImg from "../assets/home/desktop/image-web-design-large.jpg";
import GraphicDesignImg from "../assets/home/desktop/image-graphic-design.jpg";
import airFilterImg from "../assets/app-design/desktop/image-airfilter.jpg"
import eyeCamImg from "../assets/app-design/desktop/image-eyecam.jpg"
import faceItImg from "../assets/app-design/desktop/image-faceit.jpg"
import toDoImg from "../assets/app-design/desktop/image-todo.jpg"
import loopStudiosImg from "../assets/app-design/desktop/image-loopstudios.jpg"
import { ProjectsCard } from "../components/ProjectsCard"
import { BranchCards } from "../components/BranchCards"
import HeaderBgImg from "../assets/shared/desktop/bg-pattern-call-to-action.svg"
import { Link } from "react-router-dom";

export const AppDesign = () => {
  const projects = [
    {
      title: "WEB DESIGN",
      backgroundImg: `${WebDesignImg}`,
      linkTo: '/webDesign',
      className: "",
    },
    {
      title: "GRAPHIC DESIGN",
      backgroundImg: `${GraphicDesignImg}`,
      linkTo: "/graphicDesign",
      className: "",
    },
  ];

const appDesignData = [
    {
        title: "AIRFILTER",
        description: "Solving the problem of pooor indor air quality by filtering the air",
        image: `${airFilterImg}`,
    },
    {
        title: "EYECAM", 
        description: "Product that lets you edit your favorite photos and videos at any time",
        image: `${eyeCamImg}`,
    },
    {
        title: "FACEIT", 
        description: "Get to meet your favorite internet superstar with the faceit app",
        image: `${faceItImg}`,
    },
    {
        title: "TODO", 
        description: "A toto app that features cloud sync with light and dark mode",
        image: `${toDoImg}`,
    },
    {
        title: "LOOPSTUDIOS", 
        description: "A VR experience app made for Loopstudios",
        image: `${loopStudiosImg}`,
    },
]

return (
<div className="sm:mx-10 lg:mx-16 ">
  <section 
    className="bg-peach sm:rounded-lg text-white text-center"
    style={{
        backgroundImage: `url('${HeaderBgImg}')`,
        backgroundPosition: 'center'
    }}
  >
    <div className="px-4 w-9/10 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl pt-16 pb-8">App Design</h2>
        <p className="pb-16 w-9/10">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
    </div>
  </section>

  {/* Web Design Portfolio Section */}
  <section className="mt-24 mx-6 sm:mx-auto grid lg:grid-flow-col grid-rows-2 gap-4 justify-center ">
    {
        appDesignData.map((item, index) => <ProjectsCard key={index} title={item.title} description={item.description} image={item.image}/>)
    }
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
)
}
