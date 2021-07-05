import { useState, useEffect } from 'react';

export default interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const url = 'https://jsonplaceholder.typicode.com/posts';

const usePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  return posts;
};

const usePostDetail = (postId: string) => {
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    fetch(`${url}/${postId}`)
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
      })
      .catch((error) => {
        return error;
      });
  }, [postId]);
  return post;
};

export { usePost, usePostDetail };
