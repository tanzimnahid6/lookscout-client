import  { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className="bg-[#3971E7] p-2  px-12 border-b-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="./lookscout.png" alt="Logo" className="h-8 scale-75" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              Our Product
            </a>
            <div className="relative group">
              <button className="text-white flex items-center">
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-4 w-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div className="absolute hidden bg-blue-300 text-white mt-2 py-2 w-32 rounded-lg shadow-lg group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
            </div>
            <a href="#" className="text-white">
              Contacts
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-white">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? "" : "hidden"}`}
      >
        <a href="#" className="block py-2 px-4 text-white">
          Home
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Our Product
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Resources
        </a>
        <a href="#" className="block py-2 px-4 text-white">
          Contacts
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
