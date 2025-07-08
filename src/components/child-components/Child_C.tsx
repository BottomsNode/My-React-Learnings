import { useState } from "react";
// import { useMyContext } from "../MyContext";

function Child_C() {
    // const { data, setData } = useMyContext();
    const [localData, setLocalData] = useState<string>("No Data by Default");

    const handleChangeData = () => {
        setLocalData("Data updated to Child C!");
    };

    return (
        <div>
            <h2>Child C</h2>
            <p className="text-yellow-600 bg-gray-700 m-2">Data from Context: {localData}</p>
            <button
                className="border-2 px-2"
                onClick={handleChangeData}>Click to Update Data</button>
        </div>
    );
}

export default Child_C;
