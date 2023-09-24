import { useUser } from './hooksUser';

const { Navigate } = require('react-router-dom');

export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

// export default function PublicRoute({
//   redirectTo = '/',
//   component: Component,
// }) {
//   const { isLoggedIn } = useUser();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// }
