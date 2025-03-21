import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full flex justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-7xl w-full text-center bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Busy Knots x Thematic Nursery Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Busy Knots specializes in soft nursery solutions with a contemporary
          voice driven by sustainability, innovative designs, high quality, and
          timelessness. We believe that baby products should be safe, pure,
          natural, ethical, and timeless so that they may be handed down through
          generations, with love.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;