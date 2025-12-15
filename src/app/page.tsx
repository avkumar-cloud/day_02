"use client"
import React from "react";
import TopPage from "../components/Graphy/TopPage";
import Video from "../components/Graphy/Video";
import Benefit from "../components/Graphy/Benefits";
import AddData from "../components/Graphy/Workone";
import AIMagic from "../components/Graphy/WorkTwo";
import ShineData from "../components/Graphy/WorkThree";
import TellStory from "../components/Graphy/WorkFour";

export default function Home() {
  return (
    <div className="bg-[#f6f7fb]">
      <TopPage />
      <Video/>
      <Benefit/>
      <AddData />
      <AIMagic />
      <ShineData/>
      <TellStory/>
    </div> 
  );
}
