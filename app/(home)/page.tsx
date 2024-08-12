import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <Story />
      <ImageSlider />
    </div>
  );
}

export default Home;
