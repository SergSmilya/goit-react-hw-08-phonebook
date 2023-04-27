import { useDispatch, useSelector } from 'react-redux';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { selectContacts, selectFilter, selectToken } from 'redux/selectors';
import { Alert, Button, Snackbar, Typography } from '@mui/material';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(fetchContacts());
  }, [dispatch, token]);

  const onFilterSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Typography
        variant="h4"
        component={'h1'}
        align="center"
        color={'inherit'}
        mb={2}
      >
        Contacts
      </Typography>

      <ContactForm />

      <Filter />
      <Contacts contacts={onFilterSearch()} />

      <Snackbar open={false} autoHideDuration={9000}>
        <Alert severity="warning" sx={{ width: '100%' }}>
          Alert
        </Alert>
      </Snackbar>

      <div>
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Note archived"
        >
          <Alert severity="warning" sx={{ width: '100%' }}>
            Alert
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
