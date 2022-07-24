import { useState, useEffect } from "react";
import Post from "../Post/Post";
import { call } from "../api/callApi";

export function Home() {
  const [posts, setPosts] = useState(undefined);

  const setPostsFromAPI = async () => {
    const postsFromAPI = await call("/posts/4");
    setPosts(postsFromAPI);
  };
  useEffect(() => {
    setPostsFromAPI();
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post, postIndex) => (
          <Post
            key={postIndex}
            title={post.title}
            author={post.author}
            content={post.content}
          />
        ))}
    </div>
  );
}
