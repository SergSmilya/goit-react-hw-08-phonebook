import { useDispatch, useSelector } from 'react-redux';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';

export default function ContactsPage() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const token = useSelector(state => state.persistedReducer.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(fetchContacts());
  }, [dispatch, token]);

  const onFilterSearch = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <div>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <Contacts contacts={onFilterSearch()} />
    </div>
  );
}
