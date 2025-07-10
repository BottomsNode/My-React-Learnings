import { useState, useEffect } from "react";

function MyUseEffectHook() {
    const [data, setData] = useState(0);

    useEffect(() => {
        const colors = ["#FFFFF", "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD", "#8E00AD"];
        document.body.style.backgroundColor = colors[data % colors.length];

        console.log(`Background color changed for data value: ${data}`);

        return () => {
            document.body.style.backgroundColor = "";
            console.log("Cleanup: Reset background color.");
        };
    }, [data]);

    function handleClick() {
        setData((prev) => prev + 1);
    }

    return (
        <div className="text-center p-5 border-2">
            <h1 className="text-3xl p-4 hover:font-extrabold ">useEffect with Background Color</h1>
            <p className="whitespace-normal break-words">
                useEffect is a special hook that lets you run side effects in React.<br />
                It is similar to componentDidMount and componentDidUpdate, but it only runs when the <br /> component (or some of its props) changes and during the initial mount.
            </p>

            <p className="text-lg mt-4">Current Number: {data}</p>
            <button
                className="mt-4 p-2 bg-blue-500 text-white rounded"
                onClick={handleClick}
            >
                Add Number
            </button>
        </div>
    );
}

export default MyUseEffectHook;
