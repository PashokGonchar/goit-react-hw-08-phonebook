import { Navigate } from 'react-router-dom';
import { useUser } from './hooksUser';

export default function PublicRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
