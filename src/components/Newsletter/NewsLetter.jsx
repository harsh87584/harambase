import React from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

export default function NewsLetter() {
  return (
    <div className="bg-primary py-20 font-Cutiemollydemo">
      <div className="bg-white relative max-w-7xl mx-auto rounded-[30px] flex flex-col justify-center items-center py-24 md:py-0 md:pb-20 px-4 xl:mx-4">
        <img
          src="/Harambase_Smashing_GreenButtondtfe (1).gif"
          alt=""
          srcset=""
          className="absolute -left-52 top-20 h-[100%] xxl:hidden"
        />
        {/* <div className="ps-36 xl:ps-0 "> */}
        <div className="ps-36 xxl:ps-0 ">
          <img
            src="/Harambase_Smashing_GreenButtondtfe (1).gif"
            alt=""
            srcset=""
            className="hidden md:flex"
          />{" "}
          <h1 className="text-primary text-[42px] md:text-xl md:mt-10 lg:text-center">
            {" "}
            JOIN THE FASTEST GROWING COMMUNITY ON BASE
          </h1>
          {/* <div className="flex lg:flex-col items-center justify-start gap-5 mt-5">
            <input
              type="text"
              placeholder="Enter your Email"
              className="text-[#848484] rounded-[30px] bg-[#ECF1FF] py-5 px-5 w-[500px] xl:w-full outline-none"
            />
            <a className="flex items-center  bg-primary rounded-[30px]   py-5 px-10 font-normal text-base  ">
              <span className="text-white text-center text-nowrap items-center justify-center mx-auto font-Cutiemollydemo inline-block relative top-[2px] ">
                Subscribe
              </span>
            </a>
          </div> */}
        </div>
        <div className="flex text-textcolor  justify-center items-center gap-5 mt-10 ">
          <a href="https://discord.com/invite/zeCkm9qrrF" target="_blank">
            {/* <FaDiscord
              fontSize={44}
              className="border border-textcolor cursor-pointer rounded-full py-2 size-14 text-primary"
            /> */}
            <img
              src="/DEXTools (2).png"
              alt=""
              className="bg-primary/15 py-2 size-14 mx-auto flex justify-center items-center object-contain object-center  rounded-full"
            />
          </a>
          <a href="https://twitter.com/harambasetoken" target="_blank">
            <IoLogoTwitter
              fontSize={50}
              className="border border-textcolor cursor-pointer rounded-full py-2 size-14 text-primary bg-primary/15 "
            />
          </a>
          <a href="https://t.me/harambased" target="_blank">
            <FaTelegramPlane
              fontSize={50}
              className="border border-textcolor cursor-pointer rounded-full py-2 size-14 text-primary bg-primary/15 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
