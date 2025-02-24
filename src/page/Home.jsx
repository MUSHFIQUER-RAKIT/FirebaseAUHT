import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (loading) return <p>User Info Loading</p>;
  return (
    <div>
      <h1>Welcome </h1>
      <button
        className="bg-amber-100 text-white rounded p-2"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
}
