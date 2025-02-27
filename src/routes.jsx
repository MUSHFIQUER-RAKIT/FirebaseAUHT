import { createBrowserRouter } from "react-router-dom";
import JobsDetails, { JobsDetailsLoader } from "./components/JobsDetails";
import PrivateRoutes from "./components/PrivateRoutes";
import Layout from "./Layout";
import About from "./page/About";
import Contacts from "./page/Contacts";
import Home from "./page/Home";
import Jobs, { jobsLoader } from "./page/Jobs";
import JobsLayout from "./page/JobsLayout";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Register from "./page/Register";
import Reset from "./page/Reset";
import ErrorElement from "./components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "contacts", element: <Contacts /> },
      { path: "about", element: <About /> },

      {
        element: <PrivateRoutes />,
        children: [
          { path: "home", element: <Home /> },
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
