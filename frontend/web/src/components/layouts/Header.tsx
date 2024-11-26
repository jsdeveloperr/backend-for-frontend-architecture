import React, { Component } from 'react'
import { useAuth } from '@/context/AuthContext';
type HeaderProps = {}
  
  const Header = (props: HeaderProps) => {
    const { logout } = useAuth();
    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 bg-white border-t border-gray-200 shadow z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray">Italian Restaurant</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray">
                    <li>
                    <a href="#" className="block py-2 px-3 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray md:dark:text-blue-500" aria-current="page">Recipes</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent" onClick={logout}>Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
  }
  export default Header;
