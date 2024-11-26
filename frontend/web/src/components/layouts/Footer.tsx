import React from 'react';

type footerProps = {}

const Footer = (props: footerProps) => {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-500 sm:text-center text-gray-400">© 2025 <a href="#" className="hover:underline">Backend for Frontend (BFF)</a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Recipes</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Profile</a>
                </li>
            </ul>
        </footer>
    );
  };
  
export default Footer;