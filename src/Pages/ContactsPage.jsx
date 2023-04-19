import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

export default function ContactsPage() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

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
