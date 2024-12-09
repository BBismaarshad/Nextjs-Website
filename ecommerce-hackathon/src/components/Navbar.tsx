"use client"; // Add this directive at the top of the file

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const navbar = () => {
  const images = [
    "./bgheader.png",
    "./shoppingpic.jpg",
    "./shoppinpic2.webp",
    "./shoppingpic3.webp", // Smaller image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Move to next image automatically
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Move to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous image
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[50vh] sm:h-[60vh] lg:h-[716px] bg-gray-200 overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute transition-transform duration-1000 ease-in-out ${
            index === currentImageIndex
              ? index === 3
                ? "w-[40%] h-auto object-contain opacity-100" // Smaller size for the fourth image
                : "w-full h-full object-cover opacity-100" // Full size for other images
              : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default navbar;
