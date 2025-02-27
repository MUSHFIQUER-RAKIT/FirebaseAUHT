import { Outlet } from "react-router";

export default function JobsLayout() {
  return (
    <div className="flex flex-col  items-center">
      <h1>Jobs Page</h1>
      <p>Click job to see details</p>
      <Outlet />
    </div>
  );
}
