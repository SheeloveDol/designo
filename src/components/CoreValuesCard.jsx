/* eslint-disable react/prop-types */

export const CoreValuesCard = ({
  title,
  statement,
  image,
  backgroundImage,
  bgImgRotation,
  transform,
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-6 items-center justify-center">
        <div
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            transform: `${transform}`,
          }}
          className="bg-no-repeat inline-block min-w-[202px] h-[202px]"
        >
          <img
            src={image}
            alt="Illustratrion meant to convey core value"
            className={bgImgRotation}
          />
        </div>
        <div className="text-center sm:text-left lg:text-center">
          <h3 className="text-3xl text-black py-10 sm:py-4 tracking-[0.4rem]">
            {title}
          </h3>
          <p className="text-black leading-6">{statement}</p>
        </div>
      </div>
    </div>
  );
};
