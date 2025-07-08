import { useMyContext } from "../MyContext";

function Child_D() {
    const { data } = useMyContext();

    return (
        <div>
            <h2>Child D</h2>
            <p>Data from Context: {data}</p>
        </div>
    );
}

export default Child_D;
