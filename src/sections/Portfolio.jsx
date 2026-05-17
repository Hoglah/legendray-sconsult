import React from "react";
import port1 from "../assets/jpeg-optimizer_w4.jpg";
import port2 from "../assets/jpeg-optimizer_b6.jpg";
import port3 from "../assets/jpeg-optimizer_g2.jpg";
import port4 from "../assets/jpeg-optimizer_e14.jpg";
import port5 from "../assets/jpeg-optimizer_p4.jpg";
import port6 from "../assets/jpeg-optimizer_i1.jpg";
import port7 from "../assets/jpeg-optimizer_s1.jpg";
import port8 from "../assets/jpeg-optimizer_f3.jpg";

const Portfolio = () => {
  const projects = [
    {
      img: port1,
      title: "Weddings",
    },
    {
      img: port2,
      title: "Birthdays",
    },
    {
      img: port3,
      title: "Graduations",
    },
    {
      img: port4,
      title: "Events",
    },
    {
      img: port5,
      title: "Portaits",
    },
    {
      img: port6,
      title: "Children",
    },
    {
      img: port7,
      title: "Studio",
    },
    {
      img: port8,
      title: "Flyers",
    },
  ];

  return (
    <div
      id="portfolio"
      className="w-full h-auto flex flex-col items-center justify-between 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[40px]"
    >
      <h1 className="text-themeblue text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">My Portfolio</span> ~
      </h1>
      <p className="text-gray-700 text-sm font-poppins lg:w-[45%] text-center">
        At Legend Ray's Consult, I specialise in freezing those fleeting moments
        in time that hold immense significance for you. With my passion for
        photography and keen eye for detail,I transform ordinary moments into
        extraordinary memories.
      </p>

      <div
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-8 mt-6"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-900 
              hover:shadow-2xl transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div
              className="w-full absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-white text-xl font-bold mb-3">
                {project.title}
              </h2>
              <button
                data-aos="zoom-in"
                data-aos-delay="350"
                className="bg-themeblue text-white py-3 px-6 
          text-md font-semibold rounded-md  mt-5 lg:mt-0"
                onClick={() =>
                  document
                    .getElementById("gallery")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
