import WebButtons from "./WebButtons";
import { useState } from "react";

const builderButtons = [
    { shape: "rectangle", display: "h-10 w-12 rounded-md" },
    { shape: "circle", display: "h-12 w-12 rounded-full" },
];

let numerator = 0;

export default function workBench() {
    const [currentObject, setCurrentObject] = useState({});

    const handleClick = (e) => {
        console.log(e.target);
        setCurrentObject({ type: "rectangle" });
        render();
        setCurrentObject({});
    };

    function render() {
        var workBench = document.getElementById("workbench")
        var innerDiv = document.createElement("div");

        Object.assign(innerDiv.style, { height: "10rem", width: "10rem", background: "red", position: "absolute", left: "0px", top: "0px" });

        innerDiv.addEventListener("mousedown", function(e) {
            document.onmousemove = function(e) {
                Object.assign(innerDiv.style, { height: "10rem", width: "10rem", background: "red", position: "absolute", left: [e.clientX-80] + "px", top: [e.clientY-80] + "px" });
            };

            document.onmouseup = function(e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        });

        workBench.appendChild(innerDiv);
        numerator++;
    }

    return (
        <div className="bg-slate-900 w-screen min-h-screen p-6">
            <div className="flex bg-slate-200 w-full h-[95vh]">
                <WebButtons builderButtons={builderButtons} onClick={handleClick} />
                <div id="workbench" className="flex flex-col flex-1 justify-center items-center"></div>
            </div>
        </div>
    );
}