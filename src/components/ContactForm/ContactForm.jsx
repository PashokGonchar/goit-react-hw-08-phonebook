import { TextField } from '@mui/material';
import Notiflix from 'notiflix';
import React  from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';



const ContactFormPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)

  const handleSubmitForm = data => {
    const { name, number } = data;
    const contact = {
      name,
      number
    };

    if (contacts.some(contact => contact.name === name)) {
     Notiflix.Notify.info(`${name} вже існує!`);
      return;
    }

    if (contacts.some(contact => contact.number === number)) {
      Notiflix.Notify.info(`${number} вже є у цьому списку контактів!`);
      return;
    }
    dispatch(addContact(contact))
  };

  const onFormError = error => {
  Notiflix.Notify.warning(error);
}

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  },[isSubmitSuccessful, reset])
  
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm, onFormError)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              size="small"
               error={errors.name && true}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              size="small"
              type='number'
              error={errors.number && true}
              helperText={errors.number?.message}
            />
          )}
        />
        <button type="submit" variant="outlined">
          Add Contacts
        </button>
      </form>
    </>
  );
};

export default ContactFormPage;
