import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { NAV_LINKS } from '../constants/Nav_Links';  
import { Link } from 'react-router-dom'; 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="h-16 flex items-center  bg-[#f2f2e6] justify-between px-4">
        <div className="text-2xl font-semibold text-green-900 ">
          GreenLeavesBlog
        </div>

      
        <div className="hidden sm:flex space-x-6">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="text-green-800 font-medium hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>

    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-3xl text-green-900"
        >
          <CiMenuBurger />
        </button>
      </div>


      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-[#f2f2e6] space-y-2 pb-3 px-4`}>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            to={href}
            className="block text-green-800 text-lg hover:underline"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

