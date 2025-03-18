import React, { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import NewsLetter from "./components/Newsletter/NewsLetter";
import Footer from "./components/Footer/Footer";

export default function About() {
  const videoRef = useRef(null);
  useEffect(() => {
    // Attempt to play the video on component mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Error attempting to play the video:", error);
      });
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="h-[600px]  lg:h-[460px] md:!h-[160px] bg-primary relative ">
        <img
          src="/aboutvector2.png"
          alt="about poster"
          srcset=""
          className="absolute top-10  right-0 -z-0 xl:hidden"
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <video
          ref={videoRef}
          autoplay
          muted
          loop
          className="w-screen rounded-3xl mx-auto -mt-[500px] lg:-mt-[350px] md:!-mt-36 z-10 relative xl:px-4 object-cover"
          id="myVideo"
        >
          <source src="/memorial_video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="max-w-7xl mx-auto xl:px-4 xl:mt-14">
        <div className="flex flex-wrap gap-5 justify-between items-center my-[45px] md:my-[25px]">
          <div>
            <h1 className=" font-Cutiemollydemo text-[20px] text-primary bg-[#DFE7FF] px-5 py-3  rounded-[10px]">
              <h2 className="inline-block relative top-[2px]">
                {" "}
                Non-Fungible Token
              </h2>
            </h1>
          </div>
          {/* <div className="uppercase text-primary font-Cutiemollydemo text-[22px]">
            july 12, 2024 - 4 mins read
          </div> */}
        </div>
        <div>
          <h1 className="text-primary font-Cutiemollydemo my-[45px] md:my-[25px] text-[48px] md:text-3xl">
            Harambe Memorial: Honoring a Legend
          </h1>
          <p className="text-[#848484] font-Cutiemollydemo">
            At HBASE, we're driven by a vision that transcends the typical
            boundaries of cryptocurrency. In the spirit of remembrance and
            reverence, we dedicate this page to Harambe, the gorilla whose
            legacy sparked a global movement of memes and a profound social
            impact.
          </p>
          <h1 className="font-Cutiemollydemo my-[45px] md:my-[25px] text-[38px] md:text-2xl text-primary">
            Remembering Harambe
          </h1>
          <p className="text-[#848484] font-Cutiemollydemo">
            On May 28, 2016, the world lost Harambe, a 17-year-old Western
            lowland gorilla, under tragic circumstances at the Cincinnati Zoo.
            His story touched hearts worldwide, igniting a conversation about
            animal rights and zoo safety protocols. But beyond the controversy,
            Harambe became a symbol of something greater—a meme that represents
            solidarity in the face of adversity and the unpredictable nature of
            internet culture.
          </p>

          <img
            src="/blogsub.png"
            alt="blog sub img"
            srcset=""
            className="w-full my-10"
          />
          <h1 className="font-Cutiemollydemo my-[45px] md:my-[25px] text-[38px] md:text-2xl text-primary">
            Harambe's Influence on Digital Culture
          </h1>
          <p className="text-[#848484] font-Cutiemollydemo">
            Harambe's image transcended its origins, becoming a beacon in the
            meme world. His legacy is about more than just laughter; it's a
            reminder of the power of digital communities to rally around shared
            emotions and causes. At HBASE, we embrace this spirit by weaving the
            essence of Harambe into our mission—promoting digital tokens that
            not only aim for economic impact but also honor his memory.
          </p>
          <h1 className="font-Cutiemollydemo my-[45px] md:my-[25px] text-[38px] md:text-2xl text-primary">
            Our Commitment
          </h1>
          <p className="text-[#848484] font-Cutiemollydemo">
            In memory of Harambe, HBASE is committed to supporting initiatives
            that protect wildlife and promote animal welfare. A portion of our
            transaction fees is allocated to wildlife conservation projects,
            helping to ensure that the lessons learned from Harambe's story lead
            to tangible changes in the world.
          </p>

          <h1 className="font-Cutiemollydemo my-[45px] md:my-[25px] text-[38px] md:text-2xl text-primary">
            Join Us in Paying Tribute
          </h1>
          <p className="text-[#848484] font-Cutiemollydemo">
            As we continue to build on the blockchain, we invite you to join us
            in paying tribute to Harambe. Whether you're a crypto enthusiast, a
            conservation advocate, or simply someone moved by Harambe's story,
            your participation in HBASE helps carry his legacy forward. Let's
            harness the power of meme culture for a cause that matters.
            <br />
            Together, let's keep Harambe's memory alive in the chains of
            blockchain and the hearts of our community.
          </p>

          {/* <div className="bg-[#ECF1FF] p-10 rounded-[30px] font-Cutiemollydemo">
            <ul className="list-disc list-inside">
              <li className="text-[22px]">
                Increasing the Gameplay possibilities
              </li>
            </ul>
            <p className="text-[#848484] font-Cutiemollydemo my-3 text-[18px]">
              Game makers have shown a great deal of interest in NFTs. NFTs can
              be used to keep track of who owns what in-game, drive in-game
              markets, and give a variety of other benefits to gamers.br
              <br />
              <br /> In many regular games, you can purchase goods to be used in
              your gameplay. If the thing was an NFT, though, you might repay
              your investment by trading it once the game is over. If that piece
              gets more valuable, you might turn a profit.
              <br />
              <br /> As producers of the NFT, game makers might gain a
              commission each time an element is traded in the public
              marketplace.  As a result, a much more mutually advantageous
              business paradigm emerges, in which both participants and
              developers profit from the supplementary NFT market.
            </p>
            <ul className="list-disc list-inside mt-12">
              <li className="text-[22px]">
                Increasing the Gameplay possibilities
              </li>
            </ul>
            <p className="text-[#848484] font-Cutiemollydemo my-3 text-[18px]">
              Game makers have shown a great deal of interest in NFTs. NFTs can
              be used to keep track of who owns what in-game, drive in-game
              markets, and give a variety of other benefits to gamers.br
              <br />
              <br /> In many regular games, you can purchase goods to be used in
              your gameplay. If the thing was an NFT, though, you might repay
              your investment by trading it once the game is over. If that piece
              gets more valuable, you might turn a profit.
              <br />
              <br /> As producers of the NFT, game makers might gain a
              commission each time an element is traded in the public
              marketplace.  As a result, a much more mutually advantageous
              business paradigm emerges, in which both participants and
              developers profit from the supplementary NFT market.
            </p>
            <ul className="list-disc list-inside mt-12">
              <li className="text-[22px]">
                Increasing the Gameplay possibilities
              </li>
            </ul>
            <p className="text-[#848484] font-Cutiemollydemo my-3 text-[18px]">
              Game makers have shown a great deal of interest in NFTs. NFTs can
              be used to keep track of who owns what in-game, drive in-game
              markets, and give a variety of other benefits to gamers.br
              <br />
              <br /> In many regular games, you can purchase goods to be used in
              your gameplay. If the thing was an NFT, though, you might repay
              your investment by trading it once the game is over. If that piece
              gets more valuable, you might turn a profit.
              <br />
              <br /> As producers of the NFT, game makers might gain a
              commission each time an element is traded in the public
              marketplace.  As a result, a much more mutually advantageous
              business paradigm emerges, in which both participants and
              developers profit from the supplementary NFT market.
            </p>
            <ul className="list-disc list-inside mt-12">
              <li className="text-[22px]">
                Increasing the Gameplay possibilities
              </li>
            </ul>
            <p className="text-[#848484] font-Cutiemollydemo my-3 text-[18px]">
              Game makers have shown a great deal of interest in NFTs. NFTs can
              be used to keep track of who owns what in-game, drive in-game
              markets, and give a variety of other benefits to gamers.br
              <br />
              <br /> In many regular games, you can purchase goods to be used in
              your gameplay. If the thing was an NFT, though, you might repay
              your investment by trading it once the game is over. If that piece
              gets more valuable, you might turn a profit.
              <br />
              <br /> As producers of the NFT, game makers might gain a
              commission each time an element is traded in the public
              marketplace.  As a result, a much more mutually advantageous
              business paradigm emerges, in which both participants and
              developers profit from the supplementary NFT market.
            </p>
            <h1 className="text-[22px] mt-12">Read more about NFT here.</h1>
            <div className="flex flex-wrap gap-5 mt-10">
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#nft</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#crypto</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#learn</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#nftmarket</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#blockchain</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#NFThub</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#nftcases</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#nftstore</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#nfttokens</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#nft</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#crypto</h1>
              </h1>
              <h1 className="bg-[#DFE7FF] px-3 py-2 rounded-lg inline-block relative top-[2px]">
                <h1 className="inline-block relative top-[2px]">#learn</h1>
              </h1>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-20">
        <NewsLetter />
      </div>
      <Footer />
    </div>
  );
}
