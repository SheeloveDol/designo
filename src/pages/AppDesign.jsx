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
        title: "EXPRESS",
        description: "A multi-carrier shipping website for ecommerce businesses",
        image: `${airFilterImg}`,
    },
    {
        title: "TRANSFER", 
        description: "Site for low-cost money transfers and sending money within seconds",
        image: `${eyeCamImg}`,
    },
    {
        title: "PHOTON", 
        description: "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: `${faceItImg}`,
    },
    {
        title: "BUILDER", 
        description: "Connects users with local contractors based on their location",
        image: `${toDoImg}`,
    },
    {
        title: "BLOGR", 
        description: "Blogr is a platform for creating an online blog or publication",
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl pt-16 pb-8">Web Design</h2>
        <p className="pb-16 w-9/10">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
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
