import Filter from 'components/ContactFilters/ContactFilters';
import ContactFormPage from 'components/ContactForm/ContactForm';
import ContactListPage from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { selectIsLoggedIn } from 'redux/user/selectors';
import { DivPhoneBook, DivPhoneBookMain } from './PhoneBook.styled';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <DivPhoneBookMain>
      <DivPhoneBook>Phonebook</DivPhoneBook>

      <ContactFormPage />

      <DivPhoneBook>Contacts</DivPhoneBook>

      <Filter />

      {isLoading && !error && <b>Request in progress ...</b>}

      <ContactListPage />
    </DivPhoneBookMain>
  );
}
