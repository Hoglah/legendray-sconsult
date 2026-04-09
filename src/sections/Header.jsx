import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import logo from "../assets/jpeg-optimizer_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menuLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-themeblue shadow-md" : "bg-transparent"
      } py-2 lg:px-[80px] px-7`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="LRC"
            className="h-12 w-auto mr-2 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 font-poppins text-white">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-themegreen font-semibold"
                  className={`cursor-pointer ${
                    activeLink === link.to
                      ? "text-themegreen font-semibold"
                      : "hover:text-themegreen transition-colors"
                  }`}
                  onClick={() => setActiveLink(link.to)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full 
        bg-themeblue text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } 
          transition-transform duration-300 ease-in-out z-40 flex items-center 
          justify-center overflow-y-hidden`}
      >
        <IoCloseSharp
          className="fixed top-3 right-6 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="flex flex-col space-y-6 text-2xl text-center font-poppins">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer ${
                  link.name === "Home"
                    ? "text-themegreen"
                    : "hover:text-themegreen transition-colors font-poppins"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
