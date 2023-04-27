import { ListItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperation';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import { LoadingButton } from '@mui/lab';
import { selectIsLoadingContacts } from 'redux/selectors';

export default function ContactItem({ contact }) {
  const { id, name, number } = contact;
  const isLoading = useSelector(selectIsLoadingContacts);
  const dispatch = useDispatch();

  return (
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
  );
}
