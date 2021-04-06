import React, { useState } from "react";

function NavTabs(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div
        class="flex items-center justify-between flex-wrap bg-red-100 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span class="font-semibold text-xl tracking-tight">Kevin Sajan</span>
            </div>
            <div class="block lg:hidden ">
                <button
                    id="nav"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
        </div>
    
        <div className={
              "menu w-10/12 flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }>
            <div class="text-md font-bold text-blue-700 lg:flex-grow">
                <a href="#home"
                   onClick={() => props.handlePageChange("Home")}
                  //  className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Home
                </a>
                <a href="#about"
                   onClick={() => props.handlePageChange("About")}
                  //  className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
                   class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    About
                </a>
                <a href="#blog"
                   onClick={() => props.handlePageChange("Blog")}
                  //  className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Blog
                </a>
                <a href="#contact"
                    onClick={() => props.handlePageChange("Contact")}
                   class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                    Contact
                </a>
            </div>
        </div>
    </div>
  );
}

export default NavTabs;
