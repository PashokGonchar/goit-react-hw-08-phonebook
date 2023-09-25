import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import { useUser } from 'components/hooksUser';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { DivUserMenu, DivUserMenuContact, DivUserMenuContactInfo } from './UserMenu.styled'

export default function UserMenu() {
  const {
    user: { name, email },
  } = useUser();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <DivUserMenu>
      <DivUserMenuContact>
        <DivUserMenuContactInfo>
          <AccountCircleIcon color="primary" />
          {name}
        </DivUserMenuContactInfo>
        <DivUserMenuContactInfo>
          <EmailIcon color="primary" />
          {email}
        </DivUserMenuContactInfo>
      </DivUserMenuContact>
      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </DivUserMenu>
  );
}
