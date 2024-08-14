"use client";

import React from "react";
import banners from "@/utilities/banner";
import Image from "next/image";

function Banner() {
  return (
    <div className=" flex gap-4 mt-8  w-[1260px] m-auto">
      {banners.map((banner, index) => (
        <Image
          key={index}
          width={303}
          height={220}
          src={banner.image_path}
          alt=""
          className=" rounded-[15px]  cursor-pointer "
        />
      ))}
    </div>
  );
}

export default Banner;
