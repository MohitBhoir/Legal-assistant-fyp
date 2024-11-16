// src/components/NavBar.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../authContext'; // Adjust the import path as needed

export const links = [
  { title: 'Home', url: '/' },
  { title: 'Register Case', url: '/register-case' },
  { title: 'Find Lawyer', url: '/find-lawyer' },
  { title: 'Find Template', url: '/find-template' },
];

export default function NavBar() {
  const location = useLocation();
  const { user, logout } = useAuth(); // Get user and logout from AuthContext

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className={`navbar fixed w-full top-0 ${isHomePage ? 'bg-transparent' : 'bg-transparent'}`}>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 font-bold text-4xl px-2 text-blue-300">Legal Assistant</div>
          <div className="hidden flex-none lg:block">
            {user ? (
              <ul className="menu menu-horizontal">
                {links.map((link, index) => (
                  <li className="text-xl font-semibold text-blue-300 hover:bg-blue-900" key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
          {/* Logout button and User profile picture */}
          <div className="flex-none lg:flex items-center ml-auto">
            {user ? (
              <span className="text-xl font-bold mx-2 text-black">
                  Hello, {user.displayName || 'User'}
                </span>
            ) : <></>}
            {user && (
              <button
                onClick={logout}
                className="btn btn-sm text-xl btn-outline mr-4 bg-blue-700 border-blue-700
                text-white
                hover:text-blue-700 hover:bg-white"
              >
                Logout
              </button>
            )}
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
