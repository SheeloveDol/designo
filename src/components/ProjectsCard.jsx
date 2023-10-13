/* eslint-disable react/prop-types */

export const ProjectsCard = ({ title, description, image }) => {
  return (
    <div>
      <div className="bg-[#FFEAE6] flex flex-col h-full sm:grow sm:flex-row rounded-lg lg:flex-col hover:cursor-pointer group  last:text-peach hover:text-white hover:bg-peach">
        <div className="sm:basis-1/2 sm:h-full h-2/3 lg:h-2/3">
          <img
            className="rounded-t-lg sm:rounded-l-lg sm:rounded-r-none lg:rounded-t-lg lg:rounded-bl-none h-full w-full "
            src={image}
            alt={`Picture of a ${title} website`}
          />
        </div>
        <div className="text-center sm:px-4 w-7/10 px-6 lg:w-full mx-auto py-5 sm:basis-1/2 flex-1 sm:my-auto pt-10 ">
          <div>
            <h4 className="pb-3">{title}</h4>
          </div>
          <div className="text-darkGrey">
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
