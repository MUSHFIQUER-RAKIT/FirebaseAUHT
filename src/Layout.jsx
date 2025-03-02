import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

export default function Layout() {
  return (
    <div className="text-white h-svh">
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
