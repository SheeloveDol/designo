/* eslint-disable react/prop-types */


export const ContactCard = ({
  desktopImage,
  tabletImage,
  flexItemOrder,
  location,
  officeName,
  addressOne,
  addressTwo,
  phone,
  email,
}) => {
  return (
    <div>
      <section className="sm:flex sm:flex-col sm:gap-6 lg:flex-row mb-10 sm:mb-24 lg:mb-6">
        <div className={`text-center ${flexItemOrder} `}>
          <img
            src={tabletImage}
            alt="Map showing location in Canada"
            className="sm:block h-72 sm:h-auto lg:hidden w-full sm:rounded-lg lg:rounded-lg"
          />

          <img
            src={desktopImage}
            alt="Map showing location in Canada"
            className="hidden sm:hidden lg:block rounded-lg"
          />
        </div>

        <div className="bg-[#FFEAE9] text-center sm:text-left sm:pl-24 py-14 sm:py-20 sm:w-auto sm:rounded-lg lg:basis-2/3 grid items-center bg-twoCircle sm:bg-center sm:bg-no-repeat md:h-96 lg:h-auto grow">
          <div>
            <h2 className="mb-6 text-peach text-2xl sm:text-3xl">{location}</h2>
          </div>
          <div className="sm:w-3/4 sm:flex sm:justify-between ">
            <div className="mb-6 ">
              <p className="text-black">{officeName}</p>
              <p className="text-xs text-darkGrey/80">{addressOne}</p>
              <p className="text-xs text-darkGrey/80">{addressTwo}</p>
            </div>

            <div>
              <p className="text-black">Contact</p>
              <p className="text-xs text-darkGrey/80">P: {phone}</p>
              <p className="text-xs text-darkGrey/80">M: {email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

{
    /* 
    <section className="sm:flex sm:flex-col sm:gap-5 lg:flex-row">
        <div className="text-center lg:order-2 ">
          <img 
            src={CanadaTabletMapImg} 
            alt="Map showing location in Canada" 
            className="sm:block lg:hidden w-full sm:rounded-lg lg:rounded-lg"
          />

          <img 
            src={CanadaDesktopMapImg} 
            alt="Map showing location in Canada" 
            className="hidden sm:hidden lg:block rounded-lg"
          /> 
        </div>

        <div className="bg-[#FFEAE9] text-center sm:text-left sm:pl-24 py-14 sm:w-auto sm:rounded-lg lg:basis-2/3 grid items-center bg-twoCircle sm:bg-center sm:bg-no-repeat">
          <div>
            <h2 className="mb-6 text-peach text-2xl sm:text-3xl">Canada</h2>
          </div>
          <div className="sm:w-3/4 sm:flex sm:justify-between ">
            <div className="mb-6 ">
              <p className="text-black">Designo Central Office</p>
              <p className="text-xs text-darkGrey/80">3886 Wellington Street</p>
              <p className="text-xs text-darkGrey/80">Toronto, Ontario M9C 3J5</p>
            </div>

            <div>
              <p className="text-black">Contact</p>
              <p className="text-xs text-darkGrey/80">P: +1 253-863-8967</p>
              <p className="text-xs text-darkGrey/80">M: contact@designo.co</p>
            </div>
          </div>
        </div>
      </section>
    */
}