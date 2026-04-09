import React, { useEffect } from "react";
import hero from "../assets/jpeg-optimizer_me6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  });

  return (
    <div
      id="about"
      className="w-full h-auto flex flex-col items-center justify-between 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px] gap-[40px]"
    >
      <h1 className="text-themeblue text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">About Me</span> ~
      </h1>
      <div
        id="top-box"
        className="w-full flex lg:flex-row flex-col items-center justify-center gap-[2em]"
      >
        <div className="w-[50%] lg:w-[20%] flex mt-4">
          <img
            src={hero}
            alt=""
            className="w-full bg-cover bg-center rounded-[4em] 
            border-4 border-themeblue shadow-xl"
          />
        </div>
        <div
          className="lg:w-[60%] w-full flex flex-col 
        justify-center items-center lg:items-start gap-[0.5em]"
        >
          <p
            className="text-gray-900 text-sm font-poppins lg:w-[85%] 
          lg:text-left text-center"
          >
            Legend Ray who happens to be the creative is a scholar with
            Bachelor's Degree In Education. Nonetheless, his prowess is
            diversified in many field of arts as a genius. He is a multifaceted
            creative with years of experiences.
          </p>

          <p
            className="text-gray-900 text-sm font-poppins lg:w-[85%] 
          lg:text-left text-center"
          >
            As a result, he titles his brand as Legend Ray's Consult coupled
            with the mesmerising mantra, <b>Creativity Or Nothing!</b>
          </p>

          <p
            className="text-gray-900 text-sm font-poppins lg:w-[85%] 
          lg:text-left text-center"
          >
            Legend Ray is an awarded photogenic and a pundit in professional
            photography, videography, video animation, graphics design, picture
            framing, T-shirt printing and in creative writing. He is certified
            and endorsed by facilitators of the respective field of arts as well
            as Registration of Business Names Act, 1962 (Act 151) In the
            Republic of Ghana.
          </p>

          <button
            data-aos="zoom-in"
            data-aos-delay="350"
            className="border border-themeblue text-themeblue hover:bg-themeblue hover:text-white py-3 px-6 
          text-md font-semibold rounded-md transition-colors mt-5 lg:mt-0"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
