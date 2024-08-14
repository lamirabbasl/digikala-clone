import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Disccount from "@/components/Disccount";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar key={"navbar"} />
      <Story key={"stroy"} />
      <ImageSlider key={"imageslider"} />
      <Disccount key={"disccount"} />
      <Banner key={"banner"} />
      <Category key={"category"} />
    </div>
  );
}

export default Home;
