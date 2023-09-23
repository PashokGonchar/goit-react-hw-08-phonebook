import { ListBtn, ListLi } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContacts} from 'redux/user/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactListPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const onDelete = ({ id }) => {
    dispatch(deleteContacts(id));
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
