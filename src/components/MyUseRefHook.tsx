import { useEffect, useRef, useState, type SetStateAction } from "react";

function MyUseRefHook() {

    const [text, setValue] = useState("");
    const count = useRef(0)
    console.log(count)

    function onChangeFunction(e: { target: { value: SetStateAction<string>; }; }) {
        setValue(e.target.value)
    }

    useEffect(() => {
        count.current = count.current + 1;
    }, [text])

    return (
        <div className="border-2 p-5">
            <h1 className="text-center text-3xl">Use Reference Example</h1>
            <p className="p-3">The useRef Hook allows you to persist values between renders.</p>

            <label htmlFor="data" className="p-2 text-xl">Enter Text to count letter :</label>
            <input
                name="data"
                type="text"
                value={text}
                className="border-2 p-2"
                placeholder="Enter some text"
                onChange={onChangeFunction}
            />
            <p>Total letter count till is : {count.current}</p>
        </div>
    );
}

export default MyUseRefHook;
