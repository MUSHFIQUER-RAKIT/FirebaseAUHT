import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { loginWithEmailAndPassword } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const user = await loginWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">LogIn</h1>
      <form className="flex flex-col justify-center items-center">
        <div className="my-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <button
            onClick={handleLogin}
            className="bg-black text-white p-1 rounded-md mx-2"
          >
            Login
          </button>
        </div>
      </form>
      <p className="my-2">
        No Account?{<br />}{" "}
        <NavLink to="/register" className="underline text-blue-600">
          Register Now
        </NavLink>
      </p>
      <p className="my-2">
        Forgot Password?{" "}
        <NavLink to="/reset" className="underline text-blue-600">
          Reset your Password
        </NavLink>
      </p>
    </div>
  );
}
