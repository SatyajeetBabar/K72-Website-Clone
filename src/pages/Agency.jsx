import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    p1, p2, p3, p4, p5, p6, p7, p8
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 20.2%",
        end: "top -140%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent bg-[#111] text-white min-h-screen">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] rounded-3xl w-[14vw] top-[9vw] left-[31vw] overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src={imageArray[0]}  
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17.5vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-5xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
              inquisitive and open-minded, and we make sure creativity crowds
              out ego from every corner. A brand is a living thing, with values,
              a personality and a story. If we ignore that, we can achieve
              short-term success, but not influence that goes the distance. We
              bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>

      <div id="page2" className="h-screen">

      </div>
    </div>
  );
};

export default Agency;