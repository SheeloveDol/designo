import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";

// eslint-disable-next-line react/prop-types
export const BranchCards = ({ backgroundImg, title }) => {
  return (
    <div
      className="h-64 rounded-lg bg-no-repeat bg-cover bg-bottom lg:h-full cursor-pointer overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImg}')`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full w-full hover:bg-lightPeach hover:opacity-80">
        <h2 className="text-2xl sm:text-4xl lg:mb-4 text-white tracking-[0.2rem]">
          {title}
        </h2>
        <div className="flex items-center">
          <p className="text-white text-xs lg:text-xs leading-9 tracking-[0.5rem]">
            VIEW PROJECTS
          </p>
          <img src={RightArrow} alt="Right arrow" className="h-2 ml-2" />
        </div>
      </div>
    </div>
  );
};
