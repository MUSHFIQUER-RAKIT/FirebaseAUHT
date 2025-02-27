import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase";

export default function PrivateRoutes() {
  const [user] = useAuthState(auth);
  return user && <Outlet />;
}
