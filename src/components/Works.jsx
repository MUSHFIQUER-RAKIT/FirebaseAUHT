import { Link, Outlet } from "react-router";

export default function Works() {
  return (
    <div>
      <h1 className="">Framer Motion Animation</h1>
      <div className="BUTTON mb-2">
        <Link to={"example1"}>
          <button>Example 1</button>
        </Link>
        <Link to={"example2"}>
          <button>Example 2</button>
        </Link>
        <Link to={"example3"}>
          <button>Example 3</button>
        </Link>
        <Link to={"example4"}>
          <button>Example 4</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
