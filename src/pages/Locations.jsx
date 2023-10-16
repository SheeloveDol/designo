import { ContactCard } from "../components/ContactCard";
import ScrollToTop from "../components/ScrollToTop";

export const Locations = () => {
  const locationsData = [
    {
      position: [43.64414, -79.39456],
      flexItemOrder: "lg:order-1",
      location: "CANADA",
      officeName: "Designo Central Office",
      addressOne: "3886 Wellington Street",
      addressTwo: "Toronto, Ontario M9C 3J5",
      phone: "+1 253-863-8967",
      email: "contact@designo.co",
    },
    {
      position: [-30.32928, 149.78827],
      flexItemOrder: '"lg:order-2"',
      location: "AUSTRALIA",
      officeName: "Designo AU Office",
      addressOne: "19 Balonne Street",
      addressTwo: "New South Wales 2443",
      phone: "+1 (02) 6720 9092",
      email: "contact@designo.au",
    },
    {
      position: [53.71041, -1.34175],
      flexItemOrder: "lg:order-1",
      location: "United Kingdom",
      officeName: "Designo UK Office",
      addressOne: "13 Colorado Way",
      addressTwo: "Rhyd-y-fro SA8 9GA",
      phone: "+1 078 3115 1400",
      email: "contact@designo.uk",
    },
  ];

  return (
    <div className="sm:mx-10 lg:mx-16">
      <ScrollToTop />
      {locationsData.map((item, index) => (
        <ContactCard
          key={index}
          position={item.position}
          flexItemOrder={item.flexItemOrder}
          location={item.location}
          officeName={item.officeName}
          addressOne={item.addressOne}
          addressTwo={item.addressTwo}
          phone={item.phone}
          email={item.email}
        />
      ))}
    </div>
  );
};


