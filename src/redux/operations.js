import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  collection,
  addDoc,
} from 'firebase/firestore';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const userDocRef = doc(db, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const documentContacts = await getDocs(contactsCollectionRef);
      const contactsData = [];
      documentContacts.forEach(contact => {
        const docData = contact.data();
        contactsData.push({ ...docData, id: docData.id });
      });

      return contactsData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const userDocRef = doc(db, 'users', userId);
      const contactsCollectionRef = collection(userDocRef, 'contacts');
      const docRef = await addDoc(contactsCollectionRef, {
        name: contact.name,
        number: contact.number,
      });
      const addedData = (await getDoc(docRef)).data();
      return { id: docRef.id, ...addedData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const currState = thunkAPI.getState();
      const userId = currState.user.user.uid;
      const useDocRef = doc(db, 'users', userId);
      const contactsCollectionRef = collection(useDocRef, 'contacts');
      const contactDocRef = doc(contactsCollectionRef, id);
      await deleteDoc(contactDocRef);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (user, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (user, thunkAPI) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response.user);
    return response.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
