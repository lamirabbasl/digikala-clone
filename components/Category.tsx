"use client";

import React from "react";
import category from "@/utilities/category";
import Image from "next/image";

function Category() {
  return (
    <div className="w-[1200px] m-auto mt-10 ">
      <p className=" text-center text text-[22px] mb-12">
        خرید براساس دسته بندی
      </p>
      <div className="grid grid-cols-8 gap-8 " style={{ direction: "rtl" }}>
        {category.map((category, index) => (
          <div className=" flex flex-col justify-center items-center">
            <Image
              key={index}
              width={100}
              height={100}
              src={category.image_path}
              alt=""
              className=" cursor-pointer mb-2"
            />
            <p className=" text-nowrap cursor-pointer text-[14px] ">
              {category.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
