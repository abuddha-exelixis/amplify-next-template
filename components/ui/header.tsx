'use client';

import { useState, useEffect } from "react";

interface MenuNavigationItem {
  key: number;
  name: string;
  href: string;
  current: boolean;
}

const inputParams: any = {};


const headerNavigation: MenuNavigationItem[] = [
  { key: 1, name: 'Home', href: '/', current: true },
  { key: 2, name: 'Register', href: '#', current: false },
  { key: 3, name: 'Sign In', href: '/signin', current: false },
  { key: 4, name: 'Community Support Donations', href: '/content/community-support-donations.html', current: false },
  { key: 5, name: 'Healthcare - Related Charitable Contributions', href: '/content/hrc_contributions.html', current: false },
  { key: 6, name: 'Independent Patient Assistance Foundation', href: '/content/ipaf.html', current: false },
  { key: 7, name: 'Medical Education Grants', href: '/content/meded.html', current: false },
  { key: 8, name: 'Sponsorships', href: '/content/sponsorships.html', current: false },
];

interface NavbarProps {
  navigation?: MenuNavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation = headerNavigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);
    return (
        <>
        <div className="flex items-center bg-white border-b header-container">
  

  <nav className="flex-grow ml-80">
    <div className="flex items-center justify-between w-full">
      <button className="block lg:hidden p-2 border rounded" type="button" 
        data-collapse-toggle="navbarNav">
        <span className="sr-only">Toggle navigation</span>
        { <svg className="w-6 h-6" fill="none" stroke="currentColor" 
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg> }
      </button>           
      <div className="hidden lg:flex lg:items-center lg:space-x-6" id="navbarNav">
        <ul className="flex space-x-6 ml-1 headermenu">
          {navigation.map((item) => (
            <li>
              <a onClick={item.name == 'Register'? togglePopup : undefined} className={item.current?'font-semibold text-blue-600 active':'text-gray-700 hover:text-blue-600'} href={item.href}>{item.name}</a>
            </li>
          ))}
          {/* <li>
            <a className="text-gray-700 hover:text-blue-600" onClick={togglePopup} href="#">Register</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600 whitespace-nowrap" href="/signin">Sign In</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="/content/community-support-donations.html">Community Support Donations</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="/content/hrc_contributions.html">Healthcare - Related Charitable Contributions</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="/content/ipaf.html">Independent Patient Assistance Foundation</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="/content/meded.html">Medical Education Grants</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="/content/sponsorships.html">Sponsorships</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 p-0">
          <div className="bg-white w-full h-full shadow-xl relative overflow-hidden">
            
            {/* Header / Close Button */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Register</h3>
              <button 
                onClick={togglePopup}
                className="text-gray-500 hover:text-black text-2xl"
              >
                &times;
              </button>
            </div>

            {/* Iframe Content */}
            <iframe 
              src="https://exelixisgrantsreview1.review.steeprockinc.com/b5register/grantreg?registerId=4292" // Replace with your desired URL
              title="Register"
              className="w-full h-full border-none"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      )}
</div>
        </>
    );
};

export default Navbar;