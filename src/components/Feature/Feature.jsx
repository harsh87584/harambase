import React from "react";

export default function Feature() {
  return (
    <div className="relative text-white font-Cutiemollydemo ">
      <img
        src="/Vector (2).png"
        alt="vector2"
        srcset=""
        className="absolute top-20 xxl:hidden"
      />
      <img
        src="/circle.png"
        alt="vector2"
        srcset=""
        className="absolute top-20 right-0 -z-10 md:hidden"
      />
      <div className="max-w-7xl mx-auto py-20 min-h-screen flex justify-center xl:px-4">
        <div className="flex md:flex-col justify-center items-center">
          <div>
            <div className="bg-primary w-fit flex justify-start mx-auto gap-4 items-start rounded-[30px] p-10">
              {/* <div className="size-10 rounded-full bg-white/20 flex justify-center items-center flex-shrink-0">
                01
              </div> */}
              <div>
                <div className="mt-2 text-xl">BASED LAUNCH</div>
                <div className="mt-3">✅ Contract Renounced & Verified</div>
                <div className="mt-3">🔒 Locked Liquidity</div>
                <div className="mt-3">🤝 Fair Community Launch</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-5 mt-5">
              <div className="bg-primary flex justify-start gap-4 items-start rounded-[30px] p-10">
                {/* <div className="size-10 rounded-full bg-white/20 flex justify-center items-center flex-shrink-0">
                  02
                </div> */}
                <div>
                  <div className="mt-2 text-xl">BASED TOKENOMICS</div>
                  <div className="mt-3">🚫 Zero Taxes</div>
                  <div className="mt-3">💪 Giga Chad Holders </div>
                  <div className="mt-3">☑ Community LP Culture </div>
                </div>
              </div>
              <div className="bg-primary flex justify-start gap-4 items-start rounded-[30px] p-10">
                {/* <div className="size-10 rounded-full bg-white/20 flex justify-center items-center flex-shrink-0">
                  03
                </div> */}
                <div>
                  <div className="mt-2 text-xl">BASED ROADMAP</div>
                  <div className="mt-3">📊 Growing Giga Chad culture</div>
                  <div className="mt-3">🧧 Releasing Harambase NFt</div>
                  <div className="mt-3">
                    🏅 Taking the #1 Spot on Base Chain
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:relative md:mt-10">
            <img
              src="/output-onlinegiftools (1).gif"
              alt=""
              srcset=""
              className=""
            />

            <img
              src="/circle.png"
              alt="vector2"
              srcset=""
              className="absolute top-0 right-0 -z-10 md:flex hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
