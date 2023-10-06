/* eslint-disable react/prop-types */

import Logo from '../assets/shared/desktop/logo-dark.png';
import Hamburger from '../assets/shared/mobile/icon-hamburger.svg';
import Close from '../assets/shared/mobile/icon-close.svg'
import { Link } from 'react-router-dom'

export const Navbar = ({ open, handleOpen}) => {

    
  return (
    <div className='mx-5 sm:mx-10 lg:mx-16 '>
        <div className=" flex justify-between py-6 bg-white">
            <header className='flex items-center w-52'>
                <Link to="/">
                    <img src={Logo} alt='logo' />
                </Link>
            </header>
            <nav 
                onClick={handleOpen}
                className='sm:w-3/5 md:w-3/5 lg:w-2/5'
                
            >
                {/*TABLET AND DESKTOP MENU */}
                <ul className='hidden sm:flex sm:justify-between text-black'>
                    <li><Link to="/about" >OUR COMPANY</Link></li>
                    <li><Link to="/locations">LOCATIONS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul> 


                {/*MOBILE MENU BUTTONS */}
                {
                    open ? <img className='sm:hidden' src={Close} alt="Close menu button"/> : <img className='sm:hidden' src={Hamburger} alt="Menu button" /> 
                }
            </nav>
        </div>

       
    </div>
  )
}
