'use client';

import { useState, useEffect } from "react";

interface MenuNavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const headerNavigation: MenuNavigationItem[] = [
  { name: 'Home', href: '/', current: false },
  { name: 'Register', href: '/workbench', current: false },
  { name: 'Sign In', href: '/signin', current: false },
  { name: 'Community Support Donations', href: '/summary', current: false },
  { name: 'Healthcare - Related Charitable Contributions', href: '/chatbot', current: false },
  { name: 'Independent Patient Assistance Foundation', href: '/chatbot', current: false },
  { name: 'Medical Education Grants', href: '/chatbot', current: false },
  { name: 'Sponsorships', href: '/chatbot', current: false },
];

interface NavbarProps {
  navigation?: MenuNavigationItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navigation = headerNavigation }) => {
    return (
        <>
        <div className="flex items-center bg-white border-b">
  <div className="logo-section">
    {/* <img src="images/logo.png" alt="Exelixis" title="Exelixis" /> */}
    Exelixis
  </div>

  <nav className="flex-grow bg-white">
    <div className="flex items-center justify-between w-full">
      <button className="block lg:hidden p-2 border rounded" type="button" 
        data-collapse-toggle="navbarNav">
        <span className="sr-only">Toggle navigation</span>
        { <svg className="w-6 h-6" fill="none" stroke="currentColor" 
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg> }
      </button>

      <div className="hidden lg:flex lg:items-center lg:space-x-6" id="navbarNav">
        <ul className="flex space-x-6 ml-3 headermenu">
          <li>
            <a className="font-semibold text-blue-600 active" href="/">Home</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="#">Register</a>
          </li>
          <li>
            <a className="text-gray-700 hover:text-blue-600" href="/signin">Sign In</a>
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
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
        </>
    );
};

export default Navbar;