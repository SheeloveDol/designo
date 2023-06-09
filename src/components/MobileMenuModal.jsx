/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const MobileMenuModal = ({ open }) => {
  return (
    <div className={ open ? `sm:hidden absolute top-20 h-full w-full` : `hidden`}
    >
        <nav>
            <ul className="pl-6 py-12 text-white bg-black">
                <li className="pb-5 text-xl cursor-pointer"><Link to="/about">OUR COMPANY</Link></li>
                <li className="pb-5 text-xl cursor-pointer"><Link to="/locations">LOCATIONS</Link></li>
                <li className='text-xl cursor-pointer'><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
        <div className="h-full bg-black opacity-40">

        </div>
    </div> 
  )
}
