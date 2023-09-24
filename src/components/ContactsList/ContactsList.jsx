import { ListBtn, ListLi } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactListPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const onDelete = ({ id }) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul>
        {contacts.map(({ id, name, phone }) => (
          <ListLi key={id}>
            {name}:{phone}
            <ListBtn
              variant="outlined"
              startIcon={<DeleteIcon />}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete contact
            </ListBtn>
          </ListLi>
        ))}
      </ul>
    </div>
  );
};

export default ContactListPage;
