/* eslint-disable react/no-unescaped-entities */
import CanadaImg from "../assets/shared/desktop/illustration-canada.svg" 
import AustraliaImg from "../assets/shared/desktop/illustration-australia.svg" 
import UnitedKingdomImg from "../assets/shared/desktop/illustration-united-kingdom.svg" 

import aboutHeroD from "../assets/about/desktop/image-about-hero.jpg"

export const About = () => {
  return (
    <div className="sm:mx-10 lg:mx-16" >
      <section className="flex flex-col lg:flex-row">
        <div 
          className="h-64 lg:h-auto lg:w-2/5  sm:rounded-t-lg lg:rounded-r-lg lg:rounded-l-none lg:bg-aboutHeroDesktop bg-cover sm:bg-aboutHeroTablet sm:bg-cover  bg-aboutHeroMobile lg:bg-cover "
        >
          {/*<img src={aboutHeroD}/>*/}
        </div>
        <div className="bg-peach basis-3/5 text-center lg:text-left lg:py-24 lg:px-20 py-12 px-5 text-white sm:rounded-b-lg lg:rounded-l-lg lg:rounded-r-none lg:order-first">
          <h2 className="text-4xl pb-6">About Us</h2>
          <p>Founded in 2010, we are a creative agency that produces asting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row sm:mt-32">
        <div 
          className="bg-aboutWorldClassMobile bg-cover bg-center sm:bg-aboutWorldClassTablet lg:bg-aboutWorldClassDesktop lg:bg-center h-64 lg:h-auto lg:order-first sm:rounded-t-lg lg:rounded-l-lg lg:rounded-r-none lg:basis-2/5"
        ></div>
        <div className="bg-[#FFEAE6] text-center py-12 lg:py-40 px-5 text-white sm:rounded-b-lg lg:rounded-r-lg lg:rounded-l-none basis-3/5">
          <h3 className="text-3xl pb-6 text-peach">World-class talent</h3>
          <p className="text-darkGrey">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms</p>

          <p className="text-darkGrey pt-6">Our team is multi-disciplinary and we are not merely interested in form -- content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission</p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row sm:mt-32">
        <div 
          className="bg-aboutRealDealMobile bg-cover sm:bg-aboutRealDealTablet lg:bg-aboutRealDealDesktop h-64 lg:h-auto sm:rounded-t-lg lg:rounded-r-lg lg:rounded-l-none lg:basis-2/5"
        ></div>
        <div className="bg-[#FFEAE6] text-center py-12 lg:py-40 px-5 text-white sm:rounded-b-lg lg:rounded-l-lg lg:order-first lg:basis-3/5">
          <h3 className="text-3xl pb-6 text-peach">The real deal</h3>
          <p className="text-darkGrey">As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>

          <p className="text-darkGrey pt-6">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
        </div>
      </section>
    </div>
  )
}
