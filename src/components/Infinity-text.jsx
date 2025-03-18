import { cn } from "../utils/cn";
import React, { useEffect, useRef, useState } from "react";

export const Infinitytext = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef();
  const scrollerRef = useRef();

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-full overflow-hidden scale-105",
        className
      )}
      style={{ scale: 1.1 }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0   w-max flex-nowrap",
          start && "animate-scroll "
          //   pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <h1
            className="w-[150px] md:w-fit bg-primary font-Cutiemollydemo max-w-full relative flex-shrink-0     flex justify-center items-center"
            // style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            // }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex items-center justify-center gap-1">
                <img
                  src={item?.img}
                  className="size-8 object-contain object-center"
                  alt="logo"
                  srcset=""
                />
                {/* <span
                  className="  z-20 text-[18px]  relative top-[2px] text-gray-100 font-normal "
                  style={{ textAlign: "center" }}
                >
                  {item.quote}
                </span> */}
                <div>
                  <span
                    className="inline-block relative top-[2px]  z-20 text-[18px]  text-gray-100 font-normal "
                    // style={{ lineHeight: "6px" }}
                  >
                    {item.quote}
                  </span>
                </div>
                {/* <span className="text-white text-center text-lg text-nowrap items-center justify-center mx-auto  inline-block ">
                  {item.quote}
                </span> */}
              </div>
            </blockquote>
          </h1>
        ))}
      </ul>
    </div>
  );
};
