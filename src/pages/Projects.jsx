import React from "react";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";
import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    { img1: project1, img2: project2 },
    { img1: project3, img2: project4 },
    { img1: project5, img2: project6 },
  ];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.scroll',
        markers: true,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className="lg:p-4 mb-[10vh]">
      <div className="pt-[45vh]">
        <h2 className="font-[font1] lg:text-[9.5vw] uppercase ">Projects</h2>
      </div>
      <div className="scroll -mt-10 ">
        {projects.map(function (elem, idx) {
          return (
            <div key={idx} className="hero flex gap-4 w-full lg:h-125 mb-2 lg:flex-row cursor-pointer">
              <ProjectCard img1={elem.img1} img2={elem.img2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
