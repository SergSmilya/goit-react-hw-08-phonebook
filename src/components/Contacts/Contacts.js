import { List } from '@mui/material';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

export default function Contacts({ contacts }) {
  return (
    <div>
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
