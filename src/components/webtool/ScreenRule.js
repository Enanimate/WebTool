export default function ScreenRule() {

    return (
        <div className="size-full bg-slate-200 pointer-events-none">
            <div id="ruler" className="gap-[6%] flex flex-row justify-center size-full">
                {[...Array(17)].map((_e, i) => <div key={"width" + i} className="w-0.5 h-full bg-slate-400" />)}
            </div>
            <div id="ruler" className="gap-[11%] flex flex-col justify-center size-full relative -top-[100%]">
                {[...Array(10)].map((_e, i) => <div key={"height" + i} className="w-full h-1 bg-slate-400" />)}
            </div>
        </div>
    )
}