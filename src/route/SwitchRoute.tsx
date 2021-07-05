import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Post from '../components/PostContainer';
import PostDetail from '../components/PostDetail';

function SwitchRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/post">
        <Post></Post>
      </Route>
      <Route path="/post/:postId">
        <PostDetail></PostDetail>
      </Route>
    </Switch>
  );
}

export default SwitchRoute;
