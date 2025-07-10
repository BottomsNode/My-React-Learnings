import { useCallback, useEffect, useMemo, useState } from "react";
import PostList from "./Post-List-Data/PostList";

export interface PostData {
    body: string;
    id: number;
    title: string;
    userId: number;
}

function MyUseCallbackHook() {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const link = "https://jsonplaceholder.typicode.com/posts";

    const fetchData = async (url: string) => {
        setLoading(true);
        const response = await fetch(url);
        const json_data = await response.json();
        setPosts(json_data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData(link);
    }, []);


    // For memoization of CallBack no use of memo
    // const filteredPosts = useCallback(() => {
    //     return posts.filter((post) =>
    //         post.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // }, [posts, searchTerm]);

    // For memoization with use of memo
    const filteredPosts = useMemo(() => {
        return posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [posts, searchTerm]);



    const handleCount = () => {
        setCount((prevCounter) => prevCounter + 1);
    }

    return (
        <>
            <div className="border-2 p-5 w-full max-w-4xl mx-auto h-[70vh]">
                <h1 className="text-center text-3xl font-bold p-2">
                    useCallback Example: Search Posts
                </h1>

                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-400 p-2 mb-2 w-full rounded"
                    disabled={loading}
                />

                <button
                    onClick={handleCount}
                    className=""
                >
                    Click Me Counter
                </button>: {count}

                <div className="overflow-y-auto h-[39vh] pr-2">
                    {loading ? (
                        <p className="text-center text-lg text-red-600 border-b-2 font-semibold">
                            Loading..!!
                        </p>
                    ) : (
                        // <PostList getFilteredPosts={filteredPosts} />
                        <PostList filteredPosts={filteredPosts} />
                    )}
                </div>
            </div>
        </>


    );
}

export default MyUseCallbackHook;
