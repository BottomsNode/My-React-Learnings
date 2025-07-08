import { useState } from "react";
import { MyContextProvider } from "./MyContext";
import { Child_A, Child_B, Child_C, Child_D } from "./child-components";


function MyUseContextHook() {
    const [data, setData] = useState<string>("Hello from Context!");

    return (
        <MyContextProvider value={{ data, setData }}>
            <div className="border-2 p-5">
                <h1 className="text-center text-3xl">Use Context Example</h1>
                <Child_A />
                <Child_B />
                <Child_C />
                <Child_D />
            </div>
        </MyContextProvider>
    );
}

export default MyUseContextHook;
