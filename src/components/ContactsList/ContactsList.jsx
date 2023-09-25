import NavButton from 'components/UsersBar/NavButton/NavButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledTableCell } from './ContactList.styled';

const ContactListPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const onDelete = ({ id }) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: '900px' }}>
        <Table aria-label="contacts table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Function</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map(({ id, name, number }) => (
              <TableRow key={id}>
                <StyledTableCell align="center">{name}</StyledTableCell>
                <StyledTableCell align="center">{number}</StyledTableCell>
                <StyledTableCell align="center">
                  <NavButton
                    variant="outlined"
                    type="button"
                    startIcon={<DeleteIcon />}
                    onClick={() => onDelete({ id })}
                  >
                    Delete
                  </NavButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactListPage;
