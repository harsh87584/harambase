import React from "react";
import { useLocation } from "react-router-dom";
export default function About() {
  const location = useLocation();
  return (
    // <div className="bg-primary z-10 min-h-screen text-primary relative lg:pb-20 mt-[100px]">
    <div className={`bg-primary z-10 min-h-screen text-primary relative pb-20`}>
      <img
        src="/Star 16.png"
        alt=""
        srcset=""
        className="absolute top-[45%] right-96 lg:hidden"
      />
      <img
        src="/Vector (3).png"
        alt=""
        srcset=""
        className="absolute top-[40%] right-0 -z-0 xl:hidden"
      />
      <div className="max-w-7xl mx-auto xl:px-4">
        <div className="grid grid-cols-3  lg:grid-cols-1 pt-32 md:pt-20 gap-20  md:gap-10">
          <div className="relative bg-white  font-Cutiemollydemo rounded-[30px] py-10 px-10 ">
            {/* <h6 className="bg-[#DBE4FF] size-14 rounded-full text-xl flex items-center justify-center ">
              01
            </h6> */}
            <h6 className="mt-2 text-2xl font-bold tracking-wider">
              Who we Are
            </h6>
            <p className="text-black font-normal text-base mt-3">
              We are more than just a meme, harambase is a statement about who
              we are and what we value. We’re based on blockchain, literally.{" "}
            </p>
            <img
              src="/Hanging_Harambase65555 (1).gif"
              alt="mask img"
              srcset=""
              className="absolute -left-28 top-56 -z-10 lg:hidden max-w-[170%]"
            />
          </div>

          <div className="bg-white font-Cutiemollydemo rounded-[30px] py-10 px-10">
            {/* <h6 className="bg-[#DBE4FF] size-14 rounded-full text-2xl flex items-center justify-center ">
              02
            </h6> */}
            <h6 className="mt-2 text-2xl font-bold tracking-wider">
              What We Stand For
            </h6>
            <p className="text-black font-normal text-base mt-3">
              First and foremost we are not here to take part, we are here to
              take over. We stand for victory. We stand for freedom.
            </p>
          </div>

          <div className="bg-white relative font-Cutiemollydemo rounded-[30px] py-10 px-10">
            {/* <h6 className="bg-[#DBE4FF] size-14 rounded-full text-2xl flex items-center justify-center ">
              03
            </h6> */}
            <h6 className="mt-2 text-2xl font-bold tracking-wider">
              Our Culture
            </h6>
            <p className="text-black font-normal text-base mt-3">
              We've immersed ourselves in memetic culture and mastered
              blockchain real estate. At Base Chain, we champion the Giga Chad
              spirit in crypto, with Harambase leading as our emblem. Daily,
              Giga Chads boldly speak their minds, never yield, and relentlessly
              strive for victory.
            </p>
            <img
              src="/Hanging_Harambase65555 (1).gif"
              alt="mask img"
              srcset=""
              className="absolute  right-0 lg:flex hidden lg:w-[40%]  aboutimg -z-10"
            />
          </div>
        </div>
        <div className="bg-white z-10 relative  lg:mt-[400px] flex flex-col justify-end items-center mt-36 ml-auto lg:mx-auto  rounded-[30px] md:rounded-[35px] max-w-2xl py-10 font-Cutiemollydemo">
          <h1 className="text-[70px]  md:text-4xl">$HBASE</h1>
          <h2 className="bg-[#ECF1FF] px-10 lg:px-3 py-3 rounded-[30px] md:rounded-[25px] break-all md:mx-4 md:mt-5">
            <span className="md:hidden">
              {" "}
              0x1842C4f406B7b4f2ffEFc63687C2Fc05865bEE44
            </span>
            <p className="md:flex hidden md:mt-2">
              0x1842C4 f406B7b4f2ffEF c63687C2Fc05 865bEE44
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}
