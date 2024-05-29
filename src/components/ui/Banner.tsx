import React, { useState } from "react";
import useCustomSwipeable from "@/hooks/useCustomSwipeable";
import Image from "next/image";
import { ChevronRight } from "../icons";
import { ChevronLeft } from "../icons";

interface BannerProps {
  images: string[];
}

const Banner: React.FC<BannerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipe = useCustomSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div {...handleSwipe} className="relative overflow-hidden">
      <div className="relative flex items-center justify-center h-96 sm:h-48 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <Image
              priority={false}
              src={image}
              alt={`Banner ${index + 1}`}
              quality={100}
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-opacity-50 text-white"
      >
        <ChevronLeft className="hover:bg-primary rounded-full w-8 h-8 fill-primary-800" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-opacity-50 text-white"
      >
        <ChevronRight className="hover:bg-primary rounded-full hover:text-white w-8 h-8 fill-primary-800" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2 bg-primary-800 bg-opacity-50">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-primary-800" : "bg-white"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
