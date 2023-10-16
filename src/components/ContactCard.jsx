import { LeafletMap } from "./LeafletMap";

/* eslint-disable react/prop-types */

export const ContactCard = ({
  flexItemOrder,
  location,
  officeName,
  addressOne,
  addressTwo,
  phone,
  email,
  position,
}) => {
  return (
    <div>
      <section className="sm:flex sm:flex-col sm:gap-6 lg:flex-row mb-10 sm:mb-20 lg:mb-6">
        <div className={`text-center ${flexItemOrder} `}>
          <LeafletMap position={position} />
        </div>

        <div className="bg-[#FFEAE9] text-center sm:text-left sm:pl-24 py-14 sm:py-20 sm:w-auto sm:rounded-lg lg:basis-2/3 grid items-center bg-twoCircle sm:bg-center sm:bg-no-repeat  lg:h-auto grow">
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
