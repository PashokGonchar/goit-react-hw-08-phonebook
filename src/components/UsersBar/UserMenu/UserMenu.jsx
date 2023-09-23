import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import { useUser } from 'components/hooksUser';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';

export default function UserMenu() {
  const {
    user: { name, email },
  } = useUser();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div >
      <div>
        <div>
          <AccountCircleIcon color="primary" />
          {name}
        </div>
        <div>
          <EmailIcon color="primary" />
          {email}
        </div>
      </div>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
