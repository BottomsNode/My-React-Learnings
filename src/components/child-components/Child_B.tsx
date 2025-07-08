import { useMyContext } from "../MyContext";

function Child_B() {
    const { data } = useMyContext();

    return (
        <div>
            <h2>Child B</h2>
            <p>Data from Context: {data}</p>
        </div>
    );
}

export default Child_B;
