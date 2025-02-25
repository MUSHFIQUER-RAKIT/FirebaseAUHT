import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router";
import { auth } from "../firebase";

export default function PrivateRoutes() {
  const [user, loading, error] = useAuthState(auth);
  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
}
