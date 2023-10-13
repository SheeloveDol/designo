/* eslint-disable react/no-unescaped-entities */

import ScrollToTop from "../components/ScrollToTop";
import CanadaImg from "../assets/shared/desktop/illustration-canada.svg";
import AustraliaImg from "../assets/shared/desktop/illustration-australia.svg";
import UnitedKingdomImg from "../assets/shared/desktop/illustration-united-kingdom.svg";
import { LocationCard } from "../components/LocationCard";
import Form from "../components/Form";

export const Contact = () => {
  const locationCardsData = [
    {
      title: "CANADA",
      image: `${CanadaImg}`,
      imageRotation: "-rotate-90",
      bgRotation: "rotate-90",
      bottomMargin: "mb-16",
    },
    {
      title: "AUSTRALIA",
      image: `${AustraliaImg}`,
      imageRotation: "",
      bgRotation: "",
      bottomMargin: "mb-16",
    },
    {
      title: "UNITED KINGDOM",
      image: `${UnitedKingdomImg}`,
      imageRotation: "rotate-90",
      bgRotation: "-rotate-90",
      bottomMargin: "",
    },
  ];

  return (
    <div className="sm:mx-10 lg:mx-16">
      <ScrollToTop />
      <section className="bg-peach bg-smallCircle bg-no-repeat  text-white pt-10 px-6 sm:px-10 lg:flex lg:gap-8 lg:pt-8 lg:px-16 sm:rounded-lg">
        <div className="lg:basis-1/2 text-center mb-6 sm:text-left lg:pr-6 lg:pt-12">
          <h1 className="text-2xl sm:text-3xl pb-3">Contact Us</h1>
          <p className="text-xs sm:text-sm">
            Ready to take it to the next level? Let's talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that's relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="lg:basis-1/2">
          <Form />
        </div>
      </section>

      <section className="pt-24 grid lg:grid-cols-3">
        {locationCardsData.map((item, index) => (
          <LocationCard
            key={index}
            title={item.title}
            image={item.image}
            imageRotation={item.imageRotation}
            bgRotation={item.bgRotation}
            bottomMargin={item.bottomMargin}
          />
        ))}
      </section>
    </div>
  );
};
