import Filter from 'components/ContactFilters/ContactFilters';
import ContactFormPage from 'components/ContactForm/ContactForm';
import ContactListPage from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/user/selectors';

export default function Contacts() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <div>
        Phonebook
      </div>
      <ContactFormPage />
      <div>
        Contacts
      </div>
      <Filter />
      {isLoading && !error && <b>Request in progress ...</b>}
      <ContactListPage />
    </div>
  );
}
