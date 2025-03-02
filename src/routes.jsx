import { createBrowserRouter } from "react-router-dom";
import Example1 from "./components/Animations/Example1";
import Example2 from "./components/Animations/Example2";
import Example3 from "./components/Animations/Example3";
import Example4 from "./components/Animations/Example4";
import Example5 from "./components/Animations/Example5";
import ErrorElement from "./components/ErrorElement";
import JobsDetails, { JobsDetailsLoader } from "./components/JobsDetails";
import PrivateRoutes from "./components/PrivateRoutes";
import Works from "./components/Works";
import Layout from "./Layout";
import About from "./page/About";
import Home from "./page/Home";
import Jobs, { jobsLoader } from "./page/Jobs";
import JobsLayout from "./page/JobsLayout";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Register from "./page/Register";
import Reset from "./page/Reset";
import Shops from "./page/Shops";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "shops", element: <Shops /> },
      { path: "about", element: <About /> },

      {
        element: <PrivateRoutes />,
        children: [
          { path: "home", element: <Home /> },
          {
            path: "works",
            element: <Works />,
            children: [
              { index: true, element: <Example1 /> },
              { path: "example1", element: <Example1 /> },
              { path: "example2", element: <Example2 /> },
              { path: "example3", element: <Example3 /> },
              { path: "example4", element: <Example4 /> },
              { path: "example5", element: <Example5 /> },
            ],
          },
          {
            path: "jobs",
            element: <JobsLayout />,
            errorElement: <ErrorElement />,

            children: [
              { index: true, element: <Jobs />, loader: jobsLoader },
              {
                path: ":id",
                element: <JobsDetails />,
                loader: JobsDetailsLoader,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
