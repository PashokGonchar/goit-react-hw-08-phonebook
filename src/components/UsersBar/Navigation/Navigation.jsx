import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/user/selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

    return <div>
        <Button to='/' component={NavLink} end>
            Home
        </Button>
        {isLoggedIn && (
            <Button to='/contacts' component={NavLink}>
                Contacts
            </Button>
        )}
  </div>;
}
