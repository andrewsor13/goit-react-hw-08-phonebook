import React from 'react';
import { changeFilter, filterValue } from '../../redux/contactsDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact, deleteContact } from '../../redux/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import styles from '../../components/App.module.css';
import '../../index.css';

export default function PhonebookPage() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="app">
      <div className={styles.phonebook}>
        <h1 className={styles.phonebook_title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>

      <div className={styles.contacts}>
        <h2 className={styles.contacts_title}>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />

        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}
