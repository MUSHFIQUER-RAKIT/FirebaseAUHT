import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const user = await registerWithEmailAndPassword(email, password);
      navigate("/login");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Register</h1>
      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email Address:</label>
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
          <label htmlFor="password">Password:</label>
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
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-indigo-500 text-white p-1 rounded-md m-auto"
        >
          Submit
        </button>
      </form>
      <p className="my-2">
        Already Have An Account {<br />}{" "}
        <NavLink to="/login" className="underline text-blue-600">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}
