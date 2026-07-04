import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 mt-40 lg:mt-0 text-center text-white">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center">
        The spark for
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex justify-center items-center uppercase lg:leading-[8vw] leading-[10vw] ">
        all
        <div className="h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
