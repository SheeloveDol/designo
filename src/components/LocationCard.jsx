/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const LocationCard = ({ title, image, imageRotation, bgRotation, bottomMargin }) => {
  return (
    <div>
      <div className={`text-center ${bottomMargin}`}>
          <div 
            className={`bg-smallCircle ${bgRotation} bg-no-repeat w-auto inline-block mb-5`}
          >
              <img className={`${imageRotation}`} src={image} alt="" />
          </div>
          <div>
            <p className="mb-5 sm:text-xl text-darkGrey">{title}</p>
            <Link to="/locations">
              <button className="bg-peach hover:bg-lightPeach p-4 rounded-lg text-sm text-white"
              >
                SEE LOCATION
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}

