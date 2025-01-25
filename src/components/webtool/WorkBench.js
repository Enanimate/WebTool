import WebButtons from "./WebButtons";
import ScreenRule from "./ScreenRule";
import { useState } from "react";

const builderButtons = [
    { shape: "rectangle", display: "h-10 w-12 rounded-md" },
    { shape: "circle", display: "h-12 w-12 rounded-full" },
    { shape: "triangle", display: "" },
    { shape: "polygon", display: "" },
];
let numerator = 0;

export default function workBench() {

    const handleClick = () => {
        render();
    };

    function render() {
        const workBenchElement = document.getElementById("workbench");
        var innerDiv = document.createElement("div");

        Object.assign(innerDiv.style, { height: "10rem", width: "10rem", background: "red", position: "absolute", left: "0px", top: "0px" });

        innerDiv.addEventListener("mousedown", function (e) {
            document.onmousemove = function (e) {
                Object.assign(innerDiv.style, { height: "10rem", width: "10rem", background: "red", position: "absolute", left: [e.clientX - 80] + "px", top: [e.clientY - 80] + "px" });
            };

            document.onmouseup = function (e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        });

        workBenchElement.appendChild(innerDiv);
        numerator++;
    }

    return (
        <div className="bg-slate-900 w-screen h-screen">
            <div className="flex flex-row m-6 bg-red-500 w-[95vw] h-[90vh]">
                <WebButtons builderButtons={builderButtons} onClick={handleClick} />
                <div id="workbench" className="flex flex-col flex-1 justify-center items-center z-20"></div>
                <div className="w-full h-stretch">
                    <ScreenRule />
                </div>
            </div>
        </div>
    );
}