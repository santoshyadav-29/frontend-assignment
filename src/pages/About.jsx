import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
        <Header />
      <div className=" container mx-auto p-8 rounded-md shadow-md min-h-[76.5vh] text-center">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Thank you for choosing us as your go-to online store.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          If you have any questions or suggestions, feel free to contact us at{" "}
          <a
            href="ymanoutube@gmail.com"
            className="text-blue-600 hover:underline"
          >
            ymanoutube@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
