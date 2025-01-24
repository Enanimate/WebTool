"use client"

import WebButtons from "@/components/webtool/WebButtons";
import RenderBench from "@/components/webtool/RenderBench";
import { useState } from "react";

const builderButtons = [
    {shape: "rectangle", display: "h-10 w-12 rounded-md"},
    {shape: "circle", display: "h-12 w-12 rounded-full"},
];
const history = [];
let numerator = 0;

export default function Home() {
  const [currentObject, setCurrentObject] = useState({});

  const handleClick = (e) => {
    console.log(e.target.id);
    setCurrentObject({ type: "rectangle" });
    render();
    setCurrentObject({});
  };

  function render() {
    var workBench = document.getElementById("workbench")
    var innerDiv = document.createElement("div");

    innerDiv.className = ("bg-slate-300");
    //innerDiv.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
    innerDiv.innerText = "TESTING";

    workBench.appendChild(innerDiv);
    numerator++;
  }

  return (
    <div className="bg-slate-900 w-screen min-h-screen p-6">
      <div className="flex bg-slate-200 w-full h-[95vh]">
        <WebButtons builderButtons={builderButtons} onClick={handleClick} />
        <div id="workbench" className="flex-1 bg-red-500"></div>
      </div>
    </div>
  );
}