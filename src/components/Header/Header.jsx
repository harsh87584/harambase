import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isDemo2 = location.pathname === "/demo2/";
      const scrollTop = window.scrollY;

      // If on path "/demo2" and scrolled down, set scrollBackground to true
      if (isDemo2 && scrollTop > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);
  return (
    <div
      className={`${
        location.pathname === "/demo2/" && scrollBackground
          ? "bg-white border-b"
          : location.pathname == "/" ||
            location.pathname == "/donate" ||
            location.pathname == "/donate/" ||
            location.pathname == "/memorial" ||
            location.pathname == "/memorial/"
          ? "bg-white"
          : "bg-transparent border-0"
      } sticky top-0 z-[100]`}
    >
      <div className="max-w-7xl mx-auto py-7  flex justify-between items-center text-secondary xl:px-4 ">
        <Link to="/">
          <img src="/logo (1).png" alt="" srcset="" className="md:w-[75%]" />
        </Link>
        <div className="flex gap-14 font-Cutiemollydemo font-normal lg:hidden">
          {/* {location.pathname == "/demo2/" ? ( */}
          <div
            className={`${
              location.pathname == "/demo2/"
                ? "text-gray-400"
                : "text-secondary "
            } group relative flex justify-center items-center cursor-pointer`}
          >
            Game
            <div className="absolute  hidden group-hover:flex text-nowrap bg-primary  -bottom-12 font-Cutiemollydemo text-white rounded-[20px] px-5 py-2">
              comming soon
            </div>
            <img
              src="/Polygon 1.png"
              alt=""
              srcset=""
              className="absolute -bottom-[9px] hidden group-hover:flex"
            />
            {/* <div className="absolute before:content-[''] before:h-5 before:w-5 before:border-8 before:border-b-primary before:border-transparent before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 flex group-hover:flex text-nowrap bg-primary -bottom-12 font-Cutiemollydemo text-white rounded-[20px] px-5 py-2">
                comming soon
              </div> */}
          </div>

          {/* {location.pathname == "/demo2/" ? ( */}
          <div
            className={`${
              location.pathname == "/demo2/"
                ? "text-gray-400"
                : "text-secondary "
            } group relative flex justify-center items-center cursor-pointer`}
          >
            Nft's
            <div className="absolute  hidden group-hover:flex text-nowrap bg-primary  -bottom-12 font-Cutiemollydemo text-white rounded-[20px] px-5 py-2">
              comming soon
            </div>
            <img
              src="/Polygon 1.png"
              alt=""
              srcset=""
              className="absolute -bottom-[9px] hidden group-hover:flex"
            />
            {/* <div className="absolute before:content-[''] before:h-5 before:w-5 before:border-8 before:border-b-primary before:border-transparent before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 flex group-hover:flex text-nowrap bg-primary -bottom-12 font-Cutiemollydemo text-white rounded-[20px] px-5 py-2">
                comming soon
              </div> */}
          </div>

          {/* {location.pathname == "/demo2/" ? ( */}
          <div
            className={`${
              location.pathname == "/demo2/"
                ? "text-gray-400"
                : "text-secondary "
            } group relative flex justify-center items-center cursor-pointer`}
          >
            Merch
            <div className="absolute  hidden group-hover:flex text-nowrap bg-primary  -bottom-12 font-Cutiemollydemo text-white rounded-[20px] px-5 py-2">
              comming soon
            </div>
            <img
              src="/Polygon 1.png"
              alt=""
              srcset=""
              className="absolute -bottom-[9px] hidden group-hover:flex"
            />
            {/* <div className="absolute before:content-[''] before:h-5 before:w-5 before:border-8 before:border-b-primary before:border-transparent before:absolute before:-top-5 before:left-1/2 before:-translate-x-1/2 flex group-hover:flex text-nowrap bg-primary -bottom-12 font-Cutiemollydemo text-white rounded-[20px] px-5 py-2">
                comming soon
              </div> */}
          </div>

          {/* <div>Nft's</div>
          <div>Merch</div> */}
        </div>
        {/* <button className="text-white bg-primary  py-4 px-10 rounded-[30px] font-normal text-base font-VolkswagenSerialRegular lg:hidden">
          GET UPDATES
        </button> */}
        <div className="lg:flex hidden justify-center items-center lg:gap-2">
          {/* <GiHamburgerMenu fontSize={28} /> */}
          <button onClick={toggleDrawer} className="">
            <img src="/humburger.png" alt="" srcset="" />
          </button>
          {/* <button
            onClick={toggleDrawer}
            className="size-10 rounded-full bg-[#ECF1FF] py-2 flex justify-center items-center"
          >
            <GiHamburgerMenu fontSize={20} />
          </button> */}
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className="bla bla bla relative"
          >
            <div className="absolute text-black right-4 top-5">
              <MdClose fontSize={28} onClick={() => setIsOpen(false)} />
            </div>
            <div className="px-5 py-10 text-2xl space-y-10 mt-5 font-Cutiemollydemo">
              <div className="flex justify-between items-center gap-2">
                <h1>Game</h1>
                {/* <div className=" text-nowrap bg-primary text-[14px] font-Cutiemollydemo text-white rounded-[20px] px-4 py-0.5">
                  comming soon
                </div> */}
                <a
                  href=""
                  // target="_blank"
                  className="flex items-center justify-center  bg-primary rounded-[50px]  px-4 py-0.5 font-normal text-base  "
                >
                  <span className="text-white text-center text-nowrap items-center justify-center mx-auto font-Cutiemollydemo inline-block relative top-[2px] text-[14px]">
                    COMING SOON
                  </span>
                </a>
              </div>
              <div className="flex justify-between items-center gap-2">
                {" "}
                <h1>Nft's</h1>
                {/* <div className=" text-nowrap bg-primary text-[14px] font-Cutiemollydemo text-white rounded-[20px] px-4 py-0.5">
                  comming soon
                </div> */}
                <a
                  href=""
                  // target="_blank"
                  className="flex items-center justify-center  bg-primary rounded-[50px]  px-4 py-0.5 font-normal text-base  "
                >
                  <span className="text-white text-center text-nowrap items-center justify-center mx-auto font-Cutiemollydemo inline-block relative top-[2px] text-[14px]">
                    COMING SOON
                  </span>
                </a>
              </div>
              <div className="flex justify-between items-center gap-2">
                {" "}
                <h1>Merch</h1>
                {/* <div className=" text-nowrap bg-primary text-[14px] font-Cutiemollydemo text-white rounded-[20px] px-4 py-0.5">
                  comming soon
                </div> */}
                <a
                  href=""
                  // target="_blank"
                  className="flex items-center justify-center  bg-primary rounded-[50px]  px-4 py-0.5 font-normal text-base  "
                >
                  <span className="text-white text-center text-nowrap items-center justify-center mx-auto font-Cutiemollydemo inline-block relative top-[2px] text-[14px]">
                    COMING SOON
                  </span>
                </a>
              </div>
            </div>
          </Drawer>
        </div>
        {location.pathname == "/demo2/" ? (
          // <a href="">
          //   <button className="text-white font-Cutiemollydemo text-nowrap bg-primary  py-4 px-10 md:px-5 md:py-2 rounded-[50px] font-normal text-base  ">
          //     COMING SOON
          //   </button>
          // </a>
          <a
            href=""
            // target="_blank"
            className="flex items-center justify-center  bg-primary rounded-[50px]   py-4 px-10 md:px-5 md:py-2 font-normal text-base  "
          >
            <span className="text-white text-center text-nowrap items-center justify-center mx-auto font-Cutiemollydemo inline-block relative top-[2px] text-[14px]">
              COMING SOON
            </span>
          </a>
        ) : (
          <a
            href="https://t.me/harambaseportal"
            target="_blank"
            className="flex items-center bg-primary rounded-[50px]   py-4 px-10 md:px-5 md:py-2 font-normal text-base  "
          >
            {/* <span className="text-white text-center text-nowrap items-center justify-center mx-auto font-Cutiemollydemo inline-block relative top-[2px] ">
              GET UPDATES
            </span> */}
            <span
              className="text-white block mx-auto font-Cutiemollydemo text-nowrap relative top-[2px]"
              style={{ textAlign: "center" }}
            >
              GET UPDATES
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
