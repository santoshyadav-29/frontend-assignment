import React from "react";
import Header from "../Components/Header";

const About = () => {
  return (
    <div className=" container mx-auto p-8 rounded-md shadow-md min-h-[100vh]">
        <Header />
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed mb-4">
        Welcome to our website! We are dedicated to providing you with the best
        products and services.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Our mission is to make your shopping experience enjoyable and
        hassle-free. We handpick high-quality products from trusted suppliers,
        ensuring that you get the best value for your money.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Our team is passionate about customer satisfaction, and we strive to
        exceed your expectations in every way. Whether you're looking for the
        latest gadgets, trendy fashion, or essential home items, we've got you
        covered.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        We believe in building strong and lasting relationships with our
        customers. Your feedback is invaluable to us, as it helps us improve our
        products and services continuously.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        Thank you for choosing us as your go-to online store. We look forward to
        serving you and providing you with an exceptional shopping experience.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        If you have any questions or suggestions, feel free to contact us at{" "}
        <a
          href="mailto:info@example.com"
          className="text-blue-600 hover:underline"
        >
          info@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default About;
