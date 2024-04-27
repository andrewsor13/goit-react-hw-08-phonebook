import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './App.module.css';
import '../index.css';
import { getContacts } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, filterValue } from '../redux/contactsDataSlice';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
