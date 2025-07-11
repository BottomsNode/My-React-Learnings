import React, { useEffect, useState } from "react";
import type { PostData } from "../MyUseCallbackHook";

interface Props {
    getFilteredPosts: () => PostData[];
    // filteredPosts: PostData[];
}

function PostList({ getFilteredPosts }: Props) {

    console.log("Child Components")
    const [visiblePosts, setVisiblePosts] = useState<PostData[]>([]);


    useEffect(() => {
        setVisiblePosts(getFilteredPosts);
    }, [getFilteredPosts]);


    return (
        <div className="space-y-4">
            {visiblePosts.map((post) => (
                <div key={post.id} className="border p-3 rounded bg-white shadow">
                    <p><strong>UserId : </strong>{post.userId}</p>
                    <h2 className="font-semibold text-xl">Title : {post.title}</h2>
                    <p><strong>Content : </strong>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

// function PostList({ filteredPosts }: Props) {
//     console.log("Child Components");

//     return (
//         <div className="space-y-4">
//             {filteredPosts.map((post) => (
//                 <div key={post.id} className="border p-3 rounded bg-white shadow">
//                     <p><strong>UserId : </strong>{post.userId}</p>
//                     <h2 className="font-semibold text-xl">Title : {post.title}</h2>
//                     <p><strong>Content : </strong>{post.body}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default PostList;
export default React.memo(PostList)