import React, { useEffect } from "react";
import hero from "../assets/jpeg-optimizer_me7 (1).jpeg";
import bg from "../assets/jpeg-optimizer_w1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center 
    text-center px-[20px] py-[60px] gap-[40px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-themeblue/50"></div>

      {/* Content wrapper so text sits above overlay */}
      <div className="relative flex flex-col items-center gap-[40px]">
        {/* Image Section */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex justify-center items-center"
        >
          <div>
            <img
              src={hero}
              alt="Portfolio"
              className="rounded-full w-28 h-28 object-cover 
  object-center border-4 border-white shadow-xl -mt-6"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-[20px] items-center justify-center max-w-[700px]">
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-themegreen text-sm font-poppins"
          >
            Hi, I’m Legend Ray
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white lg:text-[30px] text-[20px] capitalize 
        font-poppins leading-[1.2em] font-bold"
          >
            <Typewriter
              words={["Photographer", "Graphic Designer", "Videographer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="text-gray-200 text-md font-poppins"
          >
            Chasing the light, finding magic in the ordinary. Every photo tells
            a story, what tale does this one unfold?. Ghana's soul, revealed
            through my lens. A moment frozen in time, forever etched in memory
          </p>

          {/* Social Icons */}
          <div
            className="flex gap-6 mt-6"
            data-aos="fade-up"
            data-aos-delay="280"
          >
            <a
              href="https://www.facebook.com/share/1A1JEcR6eP/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-themeblue transition-colors text-2xl 
              hover:border-2 hover:border-themeblue bg-white rounded-full p-2"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@legend_ray.s_consult?_t=8nd96KwRVkU&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-themeblue transition-colors text-2xl 
              hover:border-2 hover:border-themeblue bg-white rounded-full p-2"
            >
              <AiOutlineTikTok />
            </a>
            <a
              href="https://www.instagram.com/legendray.s_inscribed_memories?igsh=Mmhsb3dvcDhpMHdi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-themeblue transition-colors text-2xl 
              hover:border-2 hover:border-themeblue bg-white rounded-full p-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.threads.net/@legend_ray.s_consult"
              target="_blank"
              rel="noopener noreferrer"
              className="text-themeblue transition-colors text-2xl 
              hover:border-2 hover:border-themeblue bg-white rounded-full p-2"
            >
              <TbBrandThreads />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
