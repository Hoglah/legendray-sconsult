import React from "react";
import bg from "../assets/jpeg-optimizer_b6.jpg";

const Services = () => {
  const services = [
    {
      title: "Photography",
      descrp:
        "Our portrait sessions are designed to showcase your pesonality and style in stunning imagery capturing your personality, mood, and beatiful moments.",
    },
    {
      title: "Videography",
      descrp:
        "We capture moments that move. Through cinematic storytelling, crisp visuals, and seamless editing, our videography turns ideas into captivating motion that inspires, engages, and lasts.",
    },
    {
      title: "Video Animation",
      descrp:
        "We bring your ideas to life with dynamic animations. From 2D and 3D to whiteboard and text, we transform concepts into visually striking stories that simplify, engage, and captivate, turning imagination into motions that leaves a lasting impact.",
    },
    {
      title: "Graphics Design",
      descrp:
        "Our graphic design blends creativity and strategy to deliver visuals that stand out. From stunning brand identities to impactful layouts, we craft designs that communicate, inspire, and leave a memorable mark.",
    },
    {
      title: "Picture Frames",
      descrp:
        "We design picture frames that go beyond preservation; turning your photos and artworks into timeless displays. Crafted with style and precision, our frames add elegance, character, and a lasting touch to every memory. ",
    },
  ];
  return (
    <div
      id="services"
      className="w-full min-h-screen flex flex-col justify-center items-center 
    text-center px-[20px] py-[60px] gap-[40px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-themeblue/50"></div>
      {/* Content wrapper so text sits above overlay */}
      <div className="relative flex flex-col items-center gap-[30px]">
        <h1 className="text-white text-[1.1em] font-poppins font-medium">
          ~ <span className="text-white">What I Offer</span> ~
        </h1>

        <p className="text-gray-100 text-sm font-poppins lg:w-[45%] text-center">
          At Legend Ray Consult, we offer a range of professional photography
          services tailored to meet your unique needs. With a commitment to
          excellent and creativity, we strive to exceed your expectations,
          delivering captivating visuals that tell your story with passion
        </p>

        <div
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center 
      items-center gap-6 mt-6 "
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {services.map((service, index) => (
            <div
              className="flex flex-col justify-center items-center gap-4 p-10  cursor-pointer hover:scale-105 transition-transform duration-300"
              key={index}
            >
              <h1 className="text-white text-[20px] capitalize font-semibold font-poppins">
                {service.title}
              </h1>
              <h1 className="text-white text-[23px] capitalize font-semibold font-poppins mt-[-1em]">
                ~
              </h1>
              <p className="text-gray-200 text-sm font-poppins">
                {service.descrp}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
