import { useMyContext } from "../MyContext";

function Child_A() {
    const { data } = useMyContext();

    return (
        <div>
            <h2>Child A</h2>
            <p>Data from Context: {data}</p>
        </div>
    );
}

export default Child_A;
