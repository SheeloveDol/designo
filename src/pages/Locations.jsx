import CanadaTabletMapImg from "../assets/locations/tablet/image-map-canada.png"
import CanadaDesktopMapImg from "../assets/locations/desktop/image-map-canada.png"
import AustraliaTabletMapImg from "../assets/locations/tablet/image-map-australia.png"
import AustraliaDesktopMapImg from "../assets/locations/desktop/image-map-australia.png"
import UkTabletMapImg from "../assets/locations/tablet/image-map-uk.png"
import UkDesktopMapImg from "../assets/locations/desktop/image-map-united-kingdom.png"
import { ContactCard } from "../components/ContactCard"
import ScrollToTop from "../components/ScrollToTop"


export const Locations = () => {

  const locationsData = [
    {
      desktopImg: `${CanadaDesktopMapImg}`,
      tabletImg: `${CanadaTabletMapImg}`,
      flexItemOrder: "lg:order-1",
      location: "CANADA",
      officeName: "Designo Central Office",
      addressOne: "3886 Wellington Street",
      addressTwo: "Toronto, Ontario M9C 3J5",
      phone: "+1 253-863-8967",
      email: "contact@designo.co"
    },
    {
      desktopImg: `${AustraliaDesktopMapImg}`,
      tabletImg: `${AustraliaTabletMapImg}`,
      flexItemOrder: '"lg:order-2"',
      location: "AUSTRALIA",
      officeName: "Designo AU Office",
      addressOne: "19 Balonne Street",
      addressTwo: "New South Wales 2443",
      phone: "+1 (02) 6720 9092",
      email: "contact@designo.au"
    },
    {
      desktopImg: `${UkDesktopMapImg}`,
      tabletImg: `${UkTabletMapImg}`,
      flexItemOrder: "lg:order-1",
      location: "United Kingdom",
      officeName: "Designo UK Office",
      addressOne: "13 Colorado Way",
      addressTwo: "Rhyd-y-fro SA8 9GA",
      phone: "+1 078 3115 1400",
      email: "contact@designo.uk"
    },
  ]

  return (
    <div className="sm:mx-10 lg:mx-16">
      <ScrollToTop />
      {
        locationsData.map((item, index) => 
          <ContactCard
            key={index}
            desktopImage={item.desktopImg}
            tabletImage={item.tabletImg}
            flexItemOrder={item.flexItemOrder}
            location={item.location}
            officeName={item.officeName}
            addressOne={item.addressOne}
            addressTwo={item.addressTwo}
            phone={item.phone}
            email={item.email}
          />
        )
      }
    </div>
  )
}

