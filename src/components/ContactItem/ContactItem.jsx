import { Alert, ListItem, Snackbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperation';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { LoadingButton } from '@mui/lab';
import {
  selectAddContact,
  selectDeletedContact,
  selectIsLoadingContacts,
} from 'redux/selectors';
import React, { useEffect } from 'react';

export default function ContactItem({ contact }) {
  const { id, name, number } = contact;
  const isLoading = useSelector(selectIsLoadingContacts);
  const nameDeletedContact = useSelector(selectDeletedContact);
  const addContact = useSelector(selectAddContact);

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (nameDeletedContact || addContact.name) setOpen(true);
    return;
  }, [nameDeletedContact, addContact.name]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem
        sx={{
          justifyContent: 'space-between',
          border: '1px solid blue',
          borderRadius: 1,
          marginBottom: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <ContactPhoneOutlinedIcon sx={{ mr: 2 }} color="primary" />
          {name}:
          <Typography ml={1} variant="subtitle2" component="span">
            {number}
          </Typography>
        </Typography>

        <LoadingButton
          sx={{ opacity: 0.6, '&:hover, focus': { opacity: 1, color: 'red' } }}
          color="warning"
          size="medium"
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => dispatch(deleteContact(id))}
          loading={isLoading}
          loadingPosition="end"
          type="button"
        >
          delete contact
        </LoadingButton>
      </ListItem>

      <div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert severity="warning" sx={{ width: '100%' }}>
            <Typography variant="h5" component={'div'} color="inherit" mr={1}>
              {nameDeletedContact}:
            </Typography>
            <Typography variant="h6" component={'span'}>
              Deleted
            </Typography>
          </Alert>
        </Snackbar>

        {addContact.name && (
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert severity="success">
              <Typography variant="h5" component={'div'} mr={1} color="inherit">
                {addContact.name}:
              </Typography>
              <Typography variant="h6" component={'span'} mr={2}>
                {addContact.number}:
              </Typography>
              <Typography variant="h6" component={'span'}>
                Added
              </Typography>
            </Alert>
          </Snackbar>
        )}
      </div>
    </>
  );
}
