import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ redirectTo = '/', restricted = 'false' }) => {
  const { token } = useSelector(state => state.auth);

  const shouldRedirect = token && restricted;

  return shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
