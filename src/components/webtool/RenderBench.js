export default function RenderBench({ vertices, currentObject, setCurrentObject }) {
    const rectangle = "{clip-path: polygon(50% 0%, 100% 50%, 50% 100%);}";
    if (Object.keys(currentObject).length != 0) {
        setCurrentObject({});
        return (
            <>
            <p>EMPTY</p>
            </>
        );
    }
    console.log(rectangle);
    return (

        <>
            <style>
                {
                    `.fooDiv {
                        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
                    }`
                }
            </style>
            <div className="fooDiv w-40 h-40 bg-black" />
        </>
    )
}