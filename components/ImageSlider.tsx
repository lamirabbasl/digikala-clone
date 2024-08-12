"use client";

import React, { useState } from "react";
import images from "@/utilities/imagesilder";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-screen mt-6  overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image: any, index: any) => (
          <div key={index} className="w-full flex-shrink-0 cursor-pointer">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        className="absolute shadow-md hover:bg-gray-300 bottom-8 right-20 bg-white bg-opacity-50 p-2 text-lg rounded-full"
        onClick={prevSlide}
      >
        <FaAngleLeft className="m-auto" />
      </button>
      <button
        className="absolute shadow-md hover:bg-gray-300 bottom-8 right-10 bg-white bg-opacity-50 p-2 text-lg rounded-full"
        onClick={nextSlide}
      >
        <FaAngleRight className="m-auto" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              index === currentSlide
                ? "bg-white w-4 h-2 rounded-md"
                : " h-2 w-2 rounded-full bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
