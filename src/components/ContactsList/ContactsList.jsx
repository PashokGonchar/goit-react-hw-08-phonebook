import { ListBtn, ListLi } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactListPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const onDelete = ({ id }) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ListLi key={id}>
            {name}:{number}
            <ListBtn
              variant="outlined"
              type="button"
              onClick={() => onDelete({id})}
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
