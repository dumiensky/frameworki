import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/layout/MainLayout.tsx";
import Album from "./components/pages/Album.tsx";
import Albums from "./components/pages/Albums.tsx";
import Home from "./components/pages/Home.tsx";
import Post from "./components/pages/Post.tsx";
import Posts from "./components/pages/Posts.tsx";
import User from "./components/pages/User.tsx";
import Users from "./components/pages/Users.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/albums/:albumId" element={<Album />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/posts/:postId" element={<Post />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="/users" element={<Users />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
