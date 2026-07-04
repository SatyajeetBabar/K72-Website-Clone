import React, { useContext, useRef } from "react";
import project1 from "../../assets/images/project1.jpg";
import project2 from "../../assets/images/project2.png";
import agency from "../../assets/images/agency.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullScreenNav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.1,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navLink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navLink", {
      opacity: 0,
    });
    tl.to(".fullScreenNav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen],
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullScreenNav"
      className="fullScreenNav h-screen w-full overflow-hidden absolute text-white z-50"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navLink flex w-full justify-between items-start lg:p-3 p-1">
          <div className="">
            <div className="w-30">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="relative h-20 w-20 cursor-pointer"
          >
            <div className="absolute h-28 w-1 -rotate-45 origin-top bg-[#D3FD50]"></div>
            <div className="absolute h-28 w-1 right-0 rotate-45 origin-top bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="py-10">
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
              Projects
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  See Everything
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  See Everything
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  See Everything
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  See Everything
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
              Agency
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Know us
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={agency}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  know us
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={agency}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  know us
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={agency}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  know us
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={agency}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-white">
            <h1 className="font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Send us a fax
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Send us a fax
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Send us a fax
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Send us a fax
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={project2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t border-y border-white">
            <h1 className="font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
              Blog
            </h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#D3FD50]">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Blog
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={blog1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Blog
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={blog2}
                  alt=""
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Blog
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={blog1}
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-center text-[8.5vw] uppercase leading-[0.7] pt-6">
                  Blog
                </h2>
                <img
                  className="h-25 w-96 shrink-0 object-cover rounded-full"
                  src={blog2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
