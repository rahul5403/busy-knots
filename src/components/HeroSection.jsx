import React, { useState, useEffect } from 'react';
import image from "../assets/images/image1bg.jpg";
import image2 from "../assets/images/image2bg.jpg";

const heroSlides = [
  {
    title: 'Welcome to Our Website',
    description: 'Discover amazing features and explore incredible content with us.',
    image: image
  },
  {
    title: 'Experience the Difference',
    description: 'Innovative solutions for your everyday needs.',
    image: image2
  },
  {
    title: 'Join Our Community',
    description: 'Be a part of something great and grow with us.',
    image: image
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative h-[93vh] w-full overflow-hidden flex items-center justify-center">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {index === currentSlide && (
            <div className="absolute bottom-16 md:bottom-20 left-6 md:left-16 bg-black bg-opacity-50 text-white p-4 md:p-6 rounded-lg max-w-xs md:max-w-md">
              <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
              <div className="mt-4 flex space-x-3">
                <button className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Get Started</button>
                <button className="px-3 py-2 md:px-4 md:py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition">Learn More</button>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Dots Navigation */}
      <div className="absolute bottom-5 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
