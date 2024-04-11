import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobPages from "./pages/JobPages";
import NotFoundPage from "./pages/NotFoundPages";
import JobDetailsPage from "./pages/JobDetailsPage";
import PostsPage from "./pages/PostsPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import AddJob from "./pages/AddJob";
// const browserRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/jobs",
//     element: <JobPages />,
//   },
//   {
//     path: "/job/:JobId",
//     element: <JobDetailsPage />,
//   },
//   {
//     path: "/posts",
//     element: <PostsPage />,
//   },
//   {
//     path: "*",
//     element: <NotFoundPage />,
//   },
// ]);

const api = "https://jsonplaceholder.typicode.com/posts";

//loader function for postpage
const postLoader = async () => {
  const res = await fetch(api);
  const jsonResult = await res.json();
  return jsonResult;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobPages />} />
      <Route path="/job/:JobId" element={<JobDetailsPage />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/posts" element={<PostsPage />} loader={postLoader} />
      <Route path="/posts/:postId" element={<PostDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
