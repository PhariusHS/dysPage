import React from "react";
import { useMapper } from "../context/MapperContext";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function SliderUnities() {
  const { currentIndex, images, prevSlide, nextSlide } = useMapper();

  return (
    <div className="md:max-w-[1400px] md:h-[780px] w-[380px] h-[600px] md:w-full m-auto py-16 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full rounded-2xl duration-500 flex justify-center overflow-hidden relative"
      >
        <span className="absolute text-2xl font-bold text-black p-4">
          {images[currentIndex].name}
        </span>
        {/*left arrow*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/*right arrow*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
}

export default SliderUnities;