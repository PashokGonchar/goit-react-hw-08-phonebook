import { useTheme } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <MenuBookIcon />
      <div
        as="h1"
        pt="20px"
        pb="10px"
        margin="0 auto"
        color={theme.palette.text.primary}
      >
        <h1>Phonebook home page</h1>
      </div>
    </div>
  );
}
