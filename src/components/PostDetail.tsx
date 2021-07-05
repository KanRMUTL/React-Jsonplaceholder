import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostDetail } from './hooks/usePost';
import CardWithContent from './CardWithContent';
interface RouteParam {
  postId: string;
}
const PostDetail = () => {
  const { postId } = useParams<RouteParam>();
  const post = usePostDetail(postId);

  let detail: JSX.Element;

  if (post) {
    detail = (
      <CardWithContent avatarChar={post.id} headerTitle={post.title} content={post.body} Action={<b>Action</b>} />
    );
  } else {
    detail = <p>Post isn't exict</p>;
  }
  return <div>{detail}</div>;
};

export default PostDetail;
