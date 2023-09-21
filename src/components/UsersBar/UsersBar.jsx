import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';

export default function UsersBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
