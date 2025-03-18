import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrows } from "react-icons/bs";
import NewsLetter from "./components/Newsletter/NewsLetter";

function Donate() {
  const [tab, setTab] = useState("bone");
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto font-Cutiemollydemo">
        <img
          src="/Star 16.png"
          alt="star"
          srcset=""
          className="absolute top-[45%] right-52 lg:hidden"
        />
        <img
          src="/Vector (4).png"
          alt="vector"
          srcset=""
          className="absolute top-[40%] right-0 -z-0 xl:hidden"
        />
        {/* 1st part */}
        <div className="flex lg:flex-col justify-center items-center gap-16 xl:mx-4">
          <div className="bg-[#ECF1FF] z-10  w-1/2 lg:w-full  flex flex-col justify-end items-center mt-36 md:mt-10 ml-auto lg:mx-auto  rounded-[30px] md:rounded-[35px] max-w-2xl py-10 font-Cutiemollydemo">
            <h1 className="text-[70px] text-[#6087FF]  md:text-4xl ">
              HBASE / ETH
            </h1>
            <h1 className="text-4xl text-[#6087FF] md:text-2xl mb-5 md:mt-5">
              Donation wallet
            </h1>
            <h2 className="bg-white px-10 lg:px-3 py-3 rounded-[30px] md:rounded-[25px] break-all xl:mx-4 ">
              <span className=" text-primary">
                {" "}
                0x1842C4f406B7b4f2ffEFc63687C2Fc05865bEE44
              </span>
            </h2>
          </div>
          <div className="w-1/2 md:w-full">
            <div className="relative">
              <h1 className="text-5xl text-primary lg:text-center uppercase tracking-wider">
                Donate to <br /> Harambase
              </h1>
              <img
                src="/output-onlinegiftools (3).gif"
                alt="mask img"
                srcset=""
                className="absolute  -left-0 top-10 md:p-5  donatediv   -z-10"
              />
            </div>
          </div>
        </div>

        {/* 2 part */}
        <div
          className=" p-10 md:p-5 mt-[400px] md:mt-96 rounded-[30px] xl:mx-4"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex items-center gap-5 sm:gap-3">
            <img src="/token.png" alt="token" srcset="" />
            <h1 className="uppercase text-primary text-2xl">
              hbase / ETH{" "}
              {/* <span className="text-secondary text-base">0.30%</span> */}
            </h1>
            {/* <div className="bg-[#ECF1FF] rounded-full text-center text-primary px-5 py-2 uppercase">
              closed 🚫
            </div> */}
          </div>

          <div className="flex md:flex-col gap-5 items-center mt-10">
            <div className="w-1/2 md:w-full rounded-[30px] bg-primary text-white p-6">
              <h1 className="text-xl uppercase font-VolkswagenSerialBold font-bold tracking-wider">
                Liquidity
              </h1>
              <div className="flex items-center gap-5 bg-white rounded-[30px] p-4 text-secondary mt-5">
                <img src="/htoken.png" alt="htoken" />
                <div className="flex items-center gap-3">
                  <h1 className="uppercase font-VolkswagenSerialBold">hbase</h1>
                  <GoArrowUpRight />
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white rounded-[30px] p-4 text-secondary mt-5">
                <img src="/eth.png" alt="eth" />
                <div className="flex items-center gap-3">
                  <h1 className="uppercase font-VolkswagenSerialBold">eth</h1>
                  <GoArrowUpRight />
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-full rounded-[30px] bg-primary text-white p-6">
              <h1 className="text-xl uppercase font-VolkswagenSerialBold font-bold tracking-wider">
                Unclaimed fees
              </h1>
              <div className="flex items-center gap-5 bg-white rounded-[30px] p-4 text-secondary mt-5">
                <img src="/htoken.png" alt="htoken" />
                <div className="flex items-center gap-3">
                  <h1 className="uppercase font-VolkswagenSerialBold">hbase</h1>
                  <GoArrowUpRight />
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white rounded-[30px] p-4 text-secondary mt-5">
                <img src="/eth.png" alt="eth" />
                <div className="flex items-center gap-3">
                  <h1 className="uppercase font-VolkswagenSerialBold">eth</h1>
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 part */}
        {/* <div
          className=" p-10 md:p-5 rounded-[30px] mt-20 xl:mx-4"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex md:flex-col items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <h1 className=" text-primary text-2xl">Price Range </h1>
              <div className="bg-[#ECF1FF] text-center rounded-full text-primary px-5 py-2 uppercase">
                closed 🚫
              </div>
            </div>
            <div className="flex items-center gap-5 bg-[#ECF1FF] py-3 px-5 rounded-full">
              <div
                className={`${
                  tab == "bone" ? "bg-white text-primary " : "text-[#9B9B9B] "
                } rounded-full w-full px-5 py-1 cursor-pointer  `}
                onClick={() => setTab("bone")}
              >
                BONE
              </div>
              <div
                className={`${
                  tab == "eth" ? "bg-white text-primary" : "text-[#9B9B9B] "
                } rounded-full w-full px-5 py-1 cursor-pointer `}
                onClick={() => setTab("eth")}
              >
                ETH
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-around items-center mt-5">
            <div className="bg-[#ECF1FF] p-5 rounded-[20px] flex justify-between items-center flex-1 gap-5">
              <h1 className="text-[#6087FF] text-lg">min price</h1>
              <h2 className="text-primary text-3xl">220.023</h2>
              <h3 className="text-secondary text-base font-VolkswagenSerialBold font-bold uppercase">
                BONE per ETH
              </h3>
            </div>
            <div className="w-[10%] mx-auto flex justify-center">
              <BsArrows
                fontSize={40}
                className="text-secondary cursor-pointer"
              />
            </div>
            <div className="bg-[#ECF1FF] p-5 rounded-[20px] flex justify-between items-center flex-1 gap-5">
              <h1 className="text-[#6087FF] text-lg">min price</h1>
              <h2 className="text-primary text-3xl">220.023</h2>
              <h3 className="text-secondary text-base font-VolkswagenSerialBold font-bold uppercase">
                BONE per ETH
              </h3>
            </div>
          </div>
          <div className="bg-[#ECF1FF] p-5 rounded-[20px] flex justify-between items-center flex-1 mt-5 gap-5">
            <h1 className="text-[#6087FF] text-lg">min price</h1>
            <h2 className="text-primary text-3xl">5,129.1</h2>
            <h3 className="text-secondary text-base font-VolkswagenSerialBold font-bold uppercase">
              BONE per ETH
            </h3>
          </div>
        </div> */}

        {/* 4 part */}
        <div
          className=" p-10 md:p-5 rounded-[30px] mt-20 xl:mx-4"
          style={{
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 className="text-primary text-2xl">What We Stand For</h1>
          <p className="text-base text-[#9B9B9B] mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quos minima earum fuga suscipit, deserunt obcaecati nam culpa
            consequuntur fugit. Repellendus quaerat quos fugit nisi nobis? Rerum
            aliquam recusandae temporibus?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum doloremque minus repellendus reiciendis
            consequuntur? Natus similique in laudantium possimus sunt tempora
            incidunt maiores dolore ab ipsum. Fugit architecto nobis atque!
          </p>
          <p className="text-base text-[#9B9B9B] mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quos minima earum fuga suscipit, deserunt obcaecati nam culpa
            consequuntur fugit. Repellendus quaerat quos fugit nisi nobis? Rerum
            aliquam recusandae temporibus?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum doloremque minus repellendus reiciendis
            consequuntur? Natus similique in laudantium possimus sunt tempora
            incidunt maiores dolore ab ipsum. Fugit architecto nobis atque!
          </p>
        </div>
      </div>

      <div className="mt-20">
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
}

export default Donate;
