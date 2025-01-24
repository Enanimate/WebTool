export default function WebButtons({ builderButtons, onClick }) {

    return (
        <div className="flex flex-col justify-start bg-slate-700 max-w-20 h-full">
            {builderButtons.map((button, index) => (
                <button 
                    object={button}
                    id={button.shape}
                    key={"builderButton" + index} 
                    onClick={onClick} value={button.shape} 
                    className="flex justify-center items-center h-20 w-20 shadow-md border-2 active:border-0 border-slate-600"
                >
                    <div className={"border-2 border-white pointer-events-none" + " " + button.display}></div>
                </button>
            ))}
        </div>
    );
}

/*
export default function WebButtons({ builderButtons, onClick }) {

    return (
        <div className="flex flex-col justify-start">
            {builderButtons.map((button, index) => (
                <button key={"builderButton" + index} onClick={onClick} value={button.shape} className="flex justify-center items-center h-20 w-20 bg-slate-700 shadow-md border-2 active:border-0 border-slate-600">
                    <div className={"border-2 border-white" + " " + button.display} key={"builderButton" + index} onClick={onClick} value={button.shape}></div>
                </button>
            ))}
        </div>
    );
}
*/