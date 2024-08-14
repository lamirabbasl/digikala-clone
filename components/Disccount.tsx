"use client";

import React, { useState, useEffect, useRef } from "react";
import disccounts from "@/utilities/disccount";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import svgg from "@/public/disccount/Amazing.svg";
import svggg from "@/public/disccount/Amazings.svg";

function Disccount() {
  const scrollRef: any = useRef(null);
  const [rightscroll, setRightscroll] = useState(false);

  const [time, setTime] = useState({ hours: 1, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const { hours, minutes, seconds } = time;
      if (seconds > 0) {
        setTime({ hours, minutes, seconds: seconds - 1 });
      } else if (minutes > 0) {
        setTime({ hours, minutes: minutes - 1, seconds: 59 });
      } else if (hours > 0) {
        setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const scroll = (scrollOffset: any) => {
    const { scrollLeft } = scrollRef.current;
    scrollRef.current.scrollLeft += scrollOffset;
    if (scrollLeft == 0) setRightscroll(false);
    else setRightscroll(true);
  };

  return (
    <div className="flex items-center  mt-10 rounded-[10px] gap-3 m-auto h-[300px] w-[1260px] p-1 bg-[#da2f4e] ">
      <div className="flex items-center rounded-[10px] gap-3  h-[300px] w-[1100px] bg-[#da2f4e]">
        {disccounts.length > 7 && (
          <button
            onClick={() => scroll(-200)}
            className=" absolute w-[38px] bg-white shadow-md hover:bg-gray-300 h-[36px] rounded-full  "
          >
            <FaAngleLeft className="m-auto" />
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex flex-row-reverse p-5 overflow-hidden gap-1 scrollbar-hide  justify-start scroll-smooth  "
        >
          {disccounts.map((dis, index: number) => (
            <div
              key={index}
              className="flex-none justify-center w-[155px] h-[270px]  items-center bg-white text-center"
            >
              <Image
                width={400}
                height={600}
                src={dis.image_path}
                alt={dis.title}
                className="cursor-pointer m-auto w-[130px] h-[135px] mt-6 mb-2 "
              />
              <div className="text-[12px]  text-black cursor-pointer">
                {dis.title}
              </div>
            </div>
          ))}
        </div>
        {disccounts.length > 7 && rightscroll && (
          <button
            onClick={() => scroll(200)}
            className=" absolute right-[450px] w-[38px] bg-white shadow-md hover:bg-gray-300 h-[36px] rounded-full  "
          >
            <FaAngleRight className="m-auto" />
          </button>
        )}
      </div>
      <div className=" flex flex-col gap-3 justify-center items-center ml-3">
        <Image width={90} height={90} src={svggg} alt="" />
        <div className="flex gap-1 text-white text-[15px]">
          <div className="text-black bg-white p-1 rounded-[5px]">{`${time.hours
            .toString()
            .padStart(2, "0")}`}</div>
          :
          <div className=" text-black bg-white p-1 rounded-[5px]">{`${time.minutes
            .toString()
            .padStart(2, "0")}`}</div>
          :
          <div className="text-black bg-white p-1 rounded-[5px]">{`${time.seconds
            .toString()
            .padStart(2, "0")}`}</div>
        </div>
        <Image width={80} height={80} src={svgg} alt="" />
        <p className="text-white text-[14px]">&lt; مشاهده همه</p>
      </div>
    </div>
  );
}

export default Disccount;
