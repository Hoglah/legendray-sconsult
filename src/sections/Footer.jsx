import React from "react";
import bg from "../assets/jpeg-optimizer_p4.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";
import logo from "../assets/jpeg-optimizer_logo.png";

const Footer = () => {
  return (
    <div
      id="home"
      className="w-full py-10 px-7 lg:px-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-themeblue/50"></div>

      {/* Content wrapper */}
      <div className="relative flex flex-col gap-10">
        {/* Top Row: passage, links, socials, contact */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 justify-center md:justify-start text-gray-100">
          {/* Passage */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed">
              Whether it's a milestone event, a candid portrait, or the
              breathtaking beauty of nature, we strive to encapsulate the
              essence of every moment, ensuring that your cherished memories
              last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-lg font-semibold">Quick Links</h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#home" className="hover:text-themeblue">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-themeblue">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-themeblue">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-themeblue">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-themeblue">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-lg font-semibold">Follow Us</h2>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-themeblue rounded-full p-2 hover:border-2 hover:border-themeblue"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-themeblue rounded-full p-2 hover:border-2 hover:border-themeblue"
              >
                <AiOutlineTikTok />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-themeblue rounded-full p-2 hover:border-2 hover:border-themeblue"
              >
                <FaInstagram />
              </a>
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-themeblue rounded-full p-2 hover:border-2 hover:border-themeblue"
              >
                <TbBrandThreads />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-lg font-semibold">Get In Touch</h2>
            <div className="flex gap-3">
              <a
                href="tel:+233547351937"
                className="bg-themeblue hover:bg-white hover:text-themeblue py-2 px-4 rounded-md text-sm font-semibold transition-colors"
              >
                Call Me
              </a>
              <a
                href="https://wa.me/233547351937"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-themeblue hover:bg-white hover:text-themeblue py-2 px-4 
                rounded-md text-sm font-semibold transition-colors"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="LRC" className="h-20 w-auto" />
          <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} LRC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
