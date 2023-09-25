import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/user/selectors';
import NavButton from '../NavButton/NavButton';
import { NavUser } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavUser>
      <NavButton to="/" component={NavLink} end>
        Home
      </NavButton>
      {isLoggedIn && (
        <NavButton to="/contacts" component={NavLink}>
          Contacts
        </NavButton>
      )}
    </NavUser>
  );
}
