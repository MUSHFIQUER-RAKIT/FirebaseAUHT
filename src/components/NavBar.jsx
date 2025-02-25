import { signOut } from "firebase/auth";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { auth } from "../firebase";
import Logo from "/public/vite.svg";

export default function NavBar() {
  const [profileModal, setProfileModal] = useState(false);
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <nav className="bg-gray-800">
        <div className="w-full flex justify-between items-center px-20 p-2.5">
          <div>
            <a href="#" className="flex">
              <img src={Logo} alt="" />
              <span className="px-2 text-2xl">Router&Firebase</span>
            </a>
          </div>
          <div>
            <ul className="flex  bg-indigo-700 rounded list">
              <NavLink to={"/home"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li>About</li>
              </NavLink>
              <NavLink to={"/contacts"}>
                <li>Contacts</li>
              </NavLink>
              <NavLink to={"/page"}>
                <li>Page</li>
              </NavLink>
            </ul>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div>
                <Link to={"/login"}>
                  <button>Login</button>
                </Link>
                <Link to={"/register"}>
                  <button className="px-3">Register</button>
                </Link>
              </div>
              <h2>Profile</h2>
              <button onClick={() => setProfileModal(!profileModal)}>
                {" "}
                <img
                  src="/public/profile.png"
                  alt=""
                  width="45px"
                  height="45px"
                />
              </button>
            </div>
            {profileModal && (
              <div className="bg-indigo-900 absolute top-15 left-0 px-15">
                <ul>
                  <a href="#">
                    <li>Settings</li>
                  </a>
                  <a href="#">
                    <li>.......</li>
                  </a>
                  <a href="#">
                    <li>.......</li>
                  </a>
                  <a>
                    <button onClick={handleSignOut}>
                      <li>Log Out</li>
                    </button>
                  </a>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
