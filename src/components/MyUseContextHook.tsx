import { useState } from "react";
import { MyContextProvider } from "./MyContext";
import { Child_A, Child_B, Child_C, Child_D } from "./child-components";


function MyUseContextHook() {
    const [data, setData] = useState<string>("Hello from Context!");

    return (
        <MyContextProvider value={{ data, setData }}>
            <div className="border-2 p-5">
                <h1 className="text-center text-3xl hover:font-extrabold">Use Context Example</h1>
                <p className="whitespace-normal break-words p-3">
                    The useContext Hook lets us share data between components without having to pass props downthrough every level of the component tree.<br/> This is particularly useful when many components need to access the same data or when components are deeply nested.
                </p>

                <Child_A />
                <Child_B />
                <Child_C />
                <Child_D />
            </div>
        </MyContextProvider>
    );
}

export default MyUseContextHook;
