import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDB from '../components/MovieDBContainer';
import Post from '../components/PostContainer';
import PostDetail from '../components/PostDetail';
import { useLoading } from '../components/useContext/LoadingContext';

function SwitchRoute() {
  const isLoading = useLoading();
  useEffect(() => {
    console.log('debug is loading', isLoading);
  }, [isLoading]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MovieDB />
        </Route>
        <Route exact path="/post">
          <Post></Post>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
      </Switch>
    </>
  );
}

export default SwitchRoute;
