/* eslint-disable react/prop-types */


export const ProjectsCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#FFEAE6] flex flex-col sm:grow sm:flex-row rounded-lg lg:flex-col">
            <div className="sm:basis-1/2">
                <img 
                    className="rounded-t-lg sm:rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none  "
                    src={image} />
            </div>
            <div className="text-center sm:px-4 w-7/10 px-6 lg:w-4/5 mx-auto py-5 sm:basis-1/2 sm:my-auto">
                <h4 className="text-peach pb-3">{title}</h4>
                <p className="text-darkGrey">{description}</p>
            </div>
        </div>
  )
}


