import { useTheme } from '@mui/material';
import Filter from 'components/ContactFilters/ContactFilters';
import ContactFormPage from 'components/ContactForm/ContactForm';
import ContactListPage from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/user/selectors';

export default function Contacts() {
  const theme = useTheme();

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
      <div
        as="h1"
        pt="20px"
        pb="10px"
        margin="0 auto"
        color={theme.palette.text.primary}
      >
        Phonebook
      </div>
      <ContactFormPage />
      <div as="h2" mb="0" color={theme.palette.text.primary}>
        Contacts
      </div>
      <Filter />
      {isLoading && !error && <b>Request in progress ...</b>}
      <ContactListPage />
    </div>
  );
}
