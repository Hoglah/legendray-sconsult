import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const CTA = () => {
  const formRef = useRef();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tqn0new", "template_9efnynj", form.current, {
        publicKey: "gAe-ivAPKwV0AbwM6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center 
      lg:px-[80px] lg:py-[80px] py-[60px] px-[20px]  gap-10"
    >
      {/* Heading */}
      <h1 className="text-themeblue text-[1.1em] font-poppins font-medium">
        ~ <span className="text-themeblue">Reach Me</span> ~
      </h1>
      <p className="text-gray-700 text-center max-w-xl font-poppins">
        Do you want me to capture your moment or just want to say hello? Fill
        out the form below or reach me directly.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        ref={formRef}
        className="w-full max-w-lg flex flex-col gap-5 bg-gray-200 p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="font-poppins w-full p-3 rounded-md bg-gray-100 text-themeblue focus:outline-none focus:ring-2 focus:ring-themeblue"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className=" font-poppins w-full p-3 rounded-md bg-gray-100 text-themeblue focus:outline-none focus:ring-2 focus:ring-themeblue"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="w-full p-3 rounded-md bg-gray-100 text-themeblue focus:outline-none focus:ring-2 focus:ring-themeblue font-poppins"
        ></textarea>
        <button
          type="submit"
          className="bg-themeblue hover:bg-white hover:text-themeblue py-3 px-6 
          text-white text-md font-semibold rounded-md transition-colors font-poppins"
        >
          Send Message
        </button>
      </form>

      {/* Extra Contact Buttons */}
      <div className="flex gap-6 mt-6">
        <a
          href="tel:+233547351937"
          className="bg-themeblue hover:bg-transparent hover:border hover:border-themeblue hover:text-themeblue  py-3 px-6 
          text-white text-md font-semibold rounded-md transition-colors font-poppins"
        >
          Call Me
        </a>
        <a
          href="https://wa.me/233547351937"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent hover:bg-themeblue hover:text-white py-3 px-6 
          text-themeblue border border-themeblue text-md font-semibold rounded-md transition-colors font-poppins"
        >
          WhatsApp Me
        </a>
      </div>

      {/* Status Prompt */}
    </section>
  );
};

export default CTA;
