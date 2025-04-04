import React, { createContext, useState, useEffect } from 'react';
import { createTables, addPassword as dbAddPassword, getPasswords, updatePassword as dbUpdatePassword, deletePassword as dbDeletePassword, clearPasswords as dbClearPasswords, dropPasswordsTable as dbDropPasswordsTable } from '../database/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passwords, setPasswords] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordCount, setPasswordCount] = useState(0);

  useEffect(() => {
    createTables();
    loadPasswords();
    loadPasswordVisibility();
  }, []);

  const loadPasswords = () => {
    getPasswords((passwords) => {
      setPasswords(passwords);
      setPasswordCount(passwords.length);
    });
  };

  const loadPasswordVisibility = async () => {
    const visibility = await AsyncStorage.getItem('passwordVisible');
    if (visibility !== null) {
      setPasswordVisible(JSON.parse(visibility));
    }
  };

  const addPassword = (name, username, password, icon, url, notes) => {
    return dbAddPassword(name, username, password, icon, url, notes)
      .then(() => {
        loadPasswords();
      })
      .catch(error => {
        console.error('Error adding password', error);
      });
  };

  const updatePassword = (id, name, username, password, icon, url, notes) => {
    return dbUpdatePassword(id, name, username, password, icon, url, notes)
      .then(() => {
        loadPasswords();
      })
      .catch(error => {
        console.error('Error updating password', error);
      });
  };

  const deletePassword = (id) => {
    return dbDeletePassword(id)
      .then(() => {
        loadPasswords();
      })
      .catch(error => {
        console.error('Error deleting password', error);
      });
  };

  const clearPasswords = () => {
    return dbClearPasswords()
      .then(() => {
        loadPasswords();
      })
      .catch(error => {
        console.error('Error clearing passwords', error);
      });
  };

  const dropPasswordsTable = () => {
    return dbDropPasswordsTable()
      .then(() => {
        loadPasswords(); 
      })
      .catch(error => {
        console.error('Error dropping table', error);
      });
  };

  const togglePasswordVisibility = async () => {
    const newVisibility = !passwordVisible;
    setPasswordVisible(newVisibility);
    await AsyncStorage.setItem('passwordVisible', JSON.stringify(newVisibility));
  };

  return (
    <PasswordContext.Provider value={{ passwords, passwordVisible, togglePasswordVisibility, loadPasswords, addPassword, updatePassword, deletePassword, clearPasswords, dropPasswordsTable, passwordCount }}>
      {children}
    </PasswordContext.Provider>
  );
};
