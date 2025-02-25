import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
      <h1>Footer...</h1>
    </>
  );
}
