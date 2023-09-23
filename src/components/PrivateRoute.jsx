import { Navigate, Outlet } from "react-router-dom";
// import { useUser } from "./hooksUser";
import { useSelector } from "react-redux";

const PrivateRoute = ({ redirectTo }) => {
  const { token } = useSelector(state => state.auth);

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;


// export default function PrivateRoute({
//   redirectTo = '/',
//   component: Component,
// }) {
//   const { isLoggedIn } = useUser();
//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// }
