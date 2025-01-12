import React from "react";

const About = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4  sm:px-8 py-5 sm:py-10">
      <div className="space-y-10">
        <h1 className="font-protest text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          Khao Pio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-[#FAF3E1] p-6 rounded-[20px] shadow-md font-pop ">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              At Khao-Pio, our mission is to connect people with their
              favorite restaurants and food seamlessly. We aim to provide a
              convenient and reliable platform for ordering food online,
              ensuring that customers can enjoy delicious meals from the comfort
              of their homes or workplaces.
            </p>
          </div>
          <div className="bg-[#FAF3E1] p-6 rounded-[20px] shadow-md font-pop">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700">
              Our vision is to revolutionize the food delivery industry by
              leveraging technology to enhance the ordering and delivery
              experience. We aspire to become the preferred choice for customers
              seeking quick and hassle-free food delivery services, while also
              supporting local restaurants and businesses.
            </p>
          </div>
        </div>
        <div className=" font-pop">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Wide selection of restaurants and cuisines</li>
            <li>Fast and reliable delivery</li>
            <li>Easy-to-use mobile app and website</li>
            <li>Secure online payment options</li>
            <li>Exceptional customer service</li>
          </ul>
        </div>
        <div className=" bg-[#FAF3E1] p-6 rounded-[20px] shadow-md font-pop">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We'd love to hear from you! If you have any questions, feedback, or
            suggestions, please don't hesitate to reach out to us.
          </p>
          <p className="text-lg text-gray-700">
            Email: support@[platformname].com
          </p>
          <p className="text-lg text-gray-700">Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default About;
