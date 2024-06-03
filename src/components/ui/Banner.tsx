"use client";

import React, { useState } from "react";
import useCustomSwipeable from "@/hooks/useCustomSwipeable";
import Image from "next/image";
import { ChevronLeft } from "../icons";
import { cn } from "@/config/utils";

interface CarouselProps {
  images: string[];
  isShowImageBottom?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  isShowImageBottom = false,
}) => {
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
    <div {...handleSwipe} className="relative pt-6">
      <div className="relative flex items-center justify-center sm:aspect-auto sm:h-48 md:h-56 lg:h-72 xl:h-96 overflow-hidden">
        <div
          className={cn(`flex flex-row transition-transform duration-500`)}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              priority={true}
              src={image}
              alt={`Banner ${index + 1}`}
              quality={100}
              objectFit="cover"
              width={6000}
              height={800}
            />
          ))}
        </div>
        <Button
          className="left-0"
          onClick={handlePrev}
          label={
            <ChevronLeft className="hover:opacity-70 rounded-full w-5 h-5 md:w-8 md:h-8 fill-primary-800" />
          }
        />
        <Button
          className="right-0"
          onClick={handleNext}
          label={
            <ChevronLeft className="rotate-180 hover:opacity-70 rounded-full w-5 h-5 md:w-8 md:h-8 fill-primary-800" />
          }
        />
      </div>
      {isShowImageBottom ? (
        <div className="flex justify-center gap-2 p-2 overflow-hidden w-full">
          {images.map((item, index) => (
            <div
              key={index}
              className={cn("border rounded-md lg:rounded-lg w-1/3 lg:w-1/4", {
                "border-primary-800 border-solid": index === currentIndex,
                "border-white border-solid": index !== currentIndex,
              })}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <Image
                alt="detail-item"
                src={item}
                width={6000}
                height={200}
                className="object-cover rounded-md lg:rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute left-0 right-0 flex justify-center gap-2 p-2 bg-primary-800 bg-opacity-50">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 xl:w-3 xl:h-3 rounded-full ${
                index === currentIndex ? "bg-primary-800" : "bg-white"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface ButtonProps {
  label?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, label }) => {
  return (
    <button
      className={cn(
        "absolute z-10 top-1/2 transform -translate-y-1/2 p-2 bg-opacity-50 text-white",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Carousel;
