import React, { useState } from "react";

interface MyObj {
    name: string;
    age: number;
    address: string;
    email: string;
}

function MyUseStateHook() {
    const [data, setData] = useState<MyObj>({
        name: "",
        age: 0,
        address: "",
        email: "",
    });

    const [submittedData, setSubmittedData] = useState<MyObj | null>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmittedData(data);
    }

    return (
        <div className="border-2 p-5">
            <h1 className="text-center text-3xl hover:font-extrabold">Use State Example</h1>
            <p className="whitespace-normal break-words p-3">
                useState hook is used to manage the state of a component in functional components.<br />
                Calling useState returns an array with two elements: the current state value and a function to update the state.
            </p>

            <form onSubmit={handleSubmit}>
                <br />
                <label htmlFor="name">Enter Your Name:</label>
                <br />
                <input
                    id="name"
                    name="name"
                    className="border-2"
                    type="text"
                    value={data.name}
                    onChange={(e) => {
                        setData({ ...data, name: e.target.value });
                    }}
                    placeholder="Enter Your Name"
                />
                <br />
                <label htmlFor="age">Enter Your Age:</label>
                <br />
                <input
                    id="age"
                    name="age"
                    className="border-2"
                    type="number"
                    value={data.age}
                    onChange={(e) => {
                        setData({ ...data, age: +e.target.value });
                    }}
                    placeholder="Enter Your Age"
                />
                <br />
                <label htmlFor="add">Enter Your Address:</label>
                <br />
                <input
                    id="add"
                    name="add"
                    className="border-2"
                    type="text"
                    value={data.address}
                    onChange={(e) => {
                        setData({ ...data, address: e.target.value });
                    }}
                    placeholder="Enter Your Address"
                />
                <br />
                <label htmlFor="email">Enter Your Email:</label>
                <br />
                <input
                    id="email"
                    name="email"
                    className="border-2"
                    type="email"
                    value={data.email}
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                    }}
                    placeholder="Enter Your Email"
                />
                <br />
                <button type="submit" className="border-2 mt-2 px-2">Submit</button>
            </form>

            {/* Display submitted data */}
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <ul>
                        <li>Name: {submittedData.name}</li>
                        <li>Age: {submittedData.age}</li>
                        <li>Address: {submittedData.address}</li>
                        <li>Email: {submittedData.email}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default React.memo(MyUseStateHook);