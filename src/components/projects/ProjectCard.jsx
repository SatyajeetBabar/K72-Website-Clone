import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="relative group lg:w-1/2 h-full transition-all rounded-none hover:rounded-[55px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.img2} alt="" />
        <div
          className="absolute opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center
             h-full w-full top-0 left-0 bg-black/10"
        >
          <h2 className="uppercase text-6xl font-[font1] border-3 rounded-full pt-4 px-4 text-white">
            View Project
          </h2>
        </div>
      </div>
      <div className="relative group w-1/2 h-full transition-all rounded-none hover:rounded-[55px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.img1} alt="" />
        <div
          className="absolute opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center
             h-full w-full top-0 left-0 bg-black/10"
        >
          <h2 className="uppercase text-6xl font-[font1] border-3 rounded-full pt-4 px-4 text-white">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
