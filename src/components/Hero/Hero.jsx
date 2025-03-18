import React from "react";
import { Infinitytext } from "../Infinity-text";
import { useLocation } from "react-router-dom";
import coin from "./header_foot_logo.png";
const testimonials = [
  {
    quote: "$HBASE",
    name: "Charles Dickens",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "William Shakespeare",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Edgar Allan Poe",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Jane Austen",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Herman Melville",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Charles Dickens",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "William Shakespeare",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Edgar Allan Poe",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Jane Austen",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Herman Melville",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Charles Dickens",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "William Shakespeare",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Edgar Allan Poe",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Jane Austen",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Herman Melville",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Charles Dickens",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "William Shakespeare",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Edgar Allan Poe",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Jane Austen",
    img: coin,
  },
  {
    quote: "$HBASE",
    name: "Herman Melville",
    img: coin,
  },
];

export default function Hero() {
  const location = useLocation();
  console.log("location", location);
  return (
    <>
      {location.pathname == "/demo2/" ? (
        <video
          // autoPlay
          loop
          playsInline
          autoPlay
          muted
          controls={false}
          className="mx-auto w-full -mt-32 md:mt-0"
          style={{ objectPosition: "center" }}
          // ref={videoRef}
          // onPlay={() => setIsPlaying(true)}
          // onPause={() => setIsPlaying(false)}
        >
          {/* <source src="/DionTrainingSolutions.mp4" type="video/mp4" /> */}
          <source src="/HaramBaseLogo.mp4" type="video/mp4" />
        </video>
      ) : (
        <>
          {/* <div
            className={`flex h-[calc(100vh-112px)]  relative sm:h-[550px] bg-primary `}
            style={{ clipPath: "polygon(0 0, 100% 0%, 100% 33%, 0 100%)" }}
          > */}
          <div className="overflow-hidden max-w-full  relative h-[1000px] md:h-[700px]">
            <div
              className={`flex  relative  lg:h-[668px] herobg md:!h-[500px]  bg-cover bg-left-bottom`}
            >
              <div className="flex lg:flex-col xs:mt-10 max_md:mt-24 max_xs:mt-10 max_xxs:mt-10 max_lg:mt-80 items-center  max-w-7xl mx-auto  xl:px-4 gap-28 justify-center max_md:justify-start max_sm:justify-start max_xs:justify-start max_xxs:justify-start lg:gap-10">
                <div className="w-[40%] lg:w-full lg:text-center">
                  <h1 className="text-white textdiv text-[105px] md:text-5xl font-VolkswagenSerialRegular font-bold  tracking-widest ">
                    HARAMBASE
                  </h1>
                  <div className="flex w-full herodiv h-20 gap-10 md:gap-2 md:mt-5 lg:justify-center md:hidden">
                    <a
                      href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1842C4f406B7b4f2ffEFc63687C2Fc05865bEE44"
                      target="_blank"
                    >
                      <div className="text-white  shadow-lg h-fit flex gap-1 items-center justify-center bg-[#426DE8] rounded-[30px] px-5 md:px-6 py-2">
                        <img
                          src="/uniswap-button-harambase.png (2).png"
                          alt="uniswap"
                          srcset=""
                          className="w-[136px] h-[42px] object-contain object-center"
                        />
                        {/* <h2>UNISWAP</h2> */}
                      </div>
                    </a>

                    <a
                      href="https://www.dextools.io/app/en/base/pair-explorer/0x84e0df6427775d1977e76e5404df9f4d4a39791f?t=1715065955364"
                      target="_blank"
                      className="self-end flex  items-center justify-center"
                    >
                      <div className="text-white shadow-lg self-end flex gap-1 items-center justify-center bg-[#426DE8] rounded-[30px] px-5 md:px-6 py-2">
                        <img
                          src="/Group 1171275210.png"
                          alt="dextool"
                          srcset=""
                          className="w-[136px] h-[42px] object-contain object-center"
                          // className="w-[136px] h-[42px]"
                        />
                        {/* <h2>DEXTools</h2> */}
                      </div>
                    </a>

                    <a href="https://t.me/harambased" target="_blank">
                      <div className="text-white shadow-lg h-fit  flex gap-1 items-center justify-center bg-[#426DE8] rounded-[30px] px-5 md:px-6 py-2">
                        <img
                          src="/telegram.png"
                          alt="telegram"
                          srcset=""
                          className="w-[136px] h-[42px] object-contain object-center"
                        />
                        {/* <h2>TELEGRAM</h2> */}
                      </div>
                    </a>
                  </div>

                  <div className="hidden md:flex flex-wrap justify-center gap-5 md:mt-10">
                    <a
                      href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1842C4f406B7b4f2ffEFc63687C2Fc05865bEE44"
                      target="_blank"
                    >
                      <div className="text-white shadow-lg h-fit flex gap-1 items-center justify-center bg-[#426DE8] rounded-[30px] px-5 md:px-6 py-1">
                        <img
                          src="/uniswap-button-harambase.png (2).png"
                          alt="uniswap"
                          srcset=""
                          className="w-[100px] h-[45px] object-contain object-center"
                        />
                        {/* <h2>UNISWAP</h2> */}
                      </div>
                    </a>

                    <a
                      href="https://www.dextools.io/app/en/base/pair-explorer/0x84e0df6427775d1977e76e5404df9f4d4a39791f?t=1715065955364"
                      target="_blank"
                      className="self-end flex  items-center justify-center"
                    >
                      <div className="text-white shadow-lg self-end flex gap-1 items-center justify-center bg-[#426DE8] rounded-[30px] px-5 md:px-6 py-1">
                        <img
                          src="/Group 1171275210.png"
                          alt="dextool"
                          srcset=""
                          className="w-[100px] h-[45px] object-contain object-center"
                        />
                        {/* <h2>DexTools</h2> */}
                      </div>
                    </a>

                    <a href="https://t.me/harambased" target="_blank">
                      <div className="text-white shadow-lg h-fit flex gap-1 items-center justify-center bg-[#426DE8] rounded-[30px] px-5 md:px-6 py-1">
                        <img
                          src="/telegram.png"
                          alt="telegram"
                          srcset=""
                          className="w-[100px] h-[45px] object-contain object-center"
                        />
                        {/* <h2>TELEGRAM</h2> */}
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full  md:w-full lg:w-[65%]">
                  <img
                    src="/output-onlinegiftools.gif"
                    alt=""
                    srcset=""
                    className=" max-w-[130%] max_xl:max-w-full  relative max_lg:mx-auto z-50 heroposter"
                    // className=" max-w-[130%] max_xl:max-w-full max_lg:w-1/2 relative max_lg:mx-auto z-50 heroposter"
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col w-full absolute textslider top-[56%] md:top-[61%] antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center before:content-[''] before:absolute before:-left-10 before:z-[999]  before:size-12 after:content-[''] after:absolute  after:-right-14 after:z-[999]   after:h-[48px] after:w-[68px]"
              style={{ transform: "rotate(-15deg)", scale: 1.1 }}
            >
              {/* <div
              className="flex flex-col w-full absolute textslider top-[56%] md:top-[61%] antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center before:content-[''] before:absolute before:-left-10 before:z-[999] before:bg-primary before:size-12 after:content-[''] after:absolute after:-right-10 after:z-[999] after:bg-primary after:size-12"
              style={{ transform: "rotate(-15deg)" }}
            > */}
              <Infinitytext
                items={testimonials}
                direction="right"
                speed="fast"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
{
  /* <div className="flex flex-col antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Infinitytext items={testimonials} direction="right" speed="slow" />
      </div> */
}
{
  /* <div
        className="flex flex-col w-full absolute antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
        style={{ transform: "rotate(-20deg)" }}
      >
        <Infinitytext items={testimonials} direction="right" speed="slow" />
      </div> */
}
