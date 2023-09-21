import { useDispatch } from 'react-redux';
import { useUser } from './hooksUser';
import { refreshUser } from 'redux/user/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const { lazy, useEffect } = require('react');

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Contacts = lazy(() => import('pages/Contacts'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user ...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        </Route>
        
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
