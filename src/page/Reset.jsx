import { useState } from "react";
import { NavLink } from "react-router";
import { sendPasswordRest } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Your Password</h1>
      <div>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
        />
        <button
          onClick={() => sendPasswordRest(email)}
          className="bg-black text-white p-1 rounded-md mx-2"
        >
          Send
        </button>
      </div>
      <p>
        Don't You Have An Account {<br />}
        <NavLink to={"/register"} className="underline text-blue-600">
          Register Now
        </NavLink>
      </p>
    </div>
  );
}
