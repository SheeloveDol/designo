import expressImg from "../assets/web-design/desktop/image-express.jpg"
import transerImg from "../assets/web-design/desktop/image-transfer.jpg"
import photonImg from "../assets/web-design/desktop/image-photon.jpg"
import builderImg from "../assets/web-design/desktop/image-builder.jpg"
import blogrImg from "../assets/web-design/desktop/image-blogr.jpg"
import campImg from "../assets/web-design/desktop/image-camp.jpg"
import { ProjectsCard } from "../components/ProjectsCard"

export const WebDesign = () => {

    const webDesignData = [
        {
            title: "EXPRESS",
            description: "A multi-carrier shipping website for ecommerce businesses",
            image: `${expressImg}`,
        },
        {
            title: "TRANSFER", 
            description: "Site for low-cost money transfers and sending money within seconds",
            image: `${transerImg}`,
        },
        {
            title: "PHOTON", 
            description: "A state-of-the-art music player with high-resolution audio and DSP effects",
            image: `${photonImg}`,
        },
        {
            title: "BUILDER", 
            description: "Connects users with local contractors based on their location",
            image: `${builderImg}`,
        },
        {
            title: "BLOGR", 
            description: "Blogr is a platform for creating an online blog or publication",
            image: `${blogrImg}`,
        },
        {
            title: "CAMP", 
            description: "Get expert training in coding, data, design, and digital marketing",
            image: `${campImg}`,
        },
        
    ]

  return (
    <div className="sm:mx-10 lg:mx-16 ">
      <section className="bg-peach rounded-lg text-white text-center">
        <div className="px-4 w-9/10 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl pt-16 pb-8">Web Design</h2>
            <p className="pb-16 w-9/10">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </div>
      </section>

      {/* Web Design Portfolio Section */}
      <section className="mt-24 mx-6 sm:mx-auto grid lg:grid-flow-col grid-rows-2 gap-4 justify-center ">
        {
            webDesignData.map((item, index) => <ProjectsCard key={index} title={item.title} description={item.description} image={item.image}/>)
        }
      </section>
    </div>
  )
}


/*
<div className="bg-[#FFEAE6] flex flex-col rounded-lg max-w-[350px]">
            <div className="basis-2/3">
                <img src={builderImg} />
            </div>
            <div className="basis-1/3 text-center w-3/5 mx-auto py-5">
                <h4 className="text-peach pb-3">BUILDER</h4>
                <p className="text-darkGrey">A multi-carrier shipping website for ecommerce businesses</p>
            </div>
        </div>



        flex flex-col lg:flex-row lg:flex-wrap
*/