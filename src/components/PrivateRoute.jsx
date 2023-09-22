import { Navigate } from "react-router-dom";
import { useUser } from "./hooksUser";

export default function PrivateRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
