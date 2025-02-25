import { createBrowserRouter } from "react-router";
import PrivateRoutes from "./components/PrivateRoutes";
import Layout from "./Layout";
import About from "./page/About";
import Contacts from "./page/Contacts";
import Home from "./page/Home";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Page from "./page/Page";
import Register from "./page/Register";
import Reset from "./page/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/contacts", element: <Contacts /> },
      { path: "/page", element: <Page /> },
      {
        element: <PrivateRoutes />, // Private Wrapper
        children: [
          { path: "/home", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/", element: <Home />, index: true },
        ],
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;

const routerx = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout Wrapper
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "reset", element: <Reset /> },

      // ✅ Protected Routes
      {
        element: <PrivateRoutes />, // Private Wrapper
        children: [
          { path: "home", element: <Home /> },
          { path: "/", element: <Home />, index: true },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> }, // 404 Page
]);
