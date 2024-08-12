"use client";

import stories from "@/utilities/story.js";
import Image from "next/image";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface Story {
  title: string;
  image_path: string;
}
function Story() {
  const scrollRef: any = useRef(null);

  const scroll = (scrollOffset: any) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="flex item-center gap-3 ml-[170px] w-[1520px] ">
      {stories.length > 14 && (
        <button
          onClick={() => scroll(-100)}
          className=" absolute left-[200px] top-[135px]  mt-[40px] w-[38px] bg-white shadow-md hover:bg-gray-300 h-[36px] rounded-full  "
        >
          <FaAngleLeft className="m-auto" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex flex-row-reverse  overflow-hidden gap-3 scrollbar-hide  justify-center scroll-smooth  "
      >
        {stories.map((story: Story, index: number) => (
          <div key={index} className=" flex-none text-center w-24 ">
            <Image
              width={200}
              height={200}
              src={story.image_path}
              alt={story.title}
              className="rounded-full cursor-pointer w-[75px] h-[75px] mt-6 mb-2 border-2 border-white outline-2 outline outline-purple-700"
            />
            <div className="text-[12px] mr-3 text-black cursor-pointer">
              {story.title}
            </div>
          </div>
        ))}
      </div>
      {stories.length > 14 && (
        <button
          onClick={() => scroll(100)}
          className=" absolute right-[200px] top-[135px]  mt-[40px] w-[38px] bg-white shadow-md hover:bg-gray-300 h-[36px] rounded-full  "
        >
          <FaAngleRight className="m-auto" />
        </button>
      )}
    </div>
  );
}

export default Story;
