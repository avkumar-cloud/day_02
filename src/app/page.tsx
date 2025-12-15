"use client"
import { signIn } from "next-auth/react";
import React from "react";
import TopPage from "./components/TopPage";
import Video from "./components/Video";
import Benefit from "./components/Benefits";
import AddData from "./components/Workone";
import AIMagic from "./components/WorkTwo";
import ShineData from "./components/WorkThree";
import TellStory from "./components/WorkFour";

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
