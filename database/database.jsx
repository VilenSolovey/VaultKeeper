import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'VaultKeeperDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log("ERROR: " + error);
  }
);

export const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS passwords (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        username TEXT,
        password TEXT,
        icon TEXT,
        url TEXT,
        notes TEXT
      )`,
      [],
      () => {
        console.log("Table created successfully");
      },
      error => {
        console.log("Error creating table " + error.message);
      }
    );
  });
};

export const dropPasswordsTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        `DROP TABLE IF EXISTS passwords`,
        [],
        () => {
          console.log("Table dropped successfully");
          resolve();
        },
        error => {
          console.log("Error dropping table " + error.message);
          reject(error);
        }
      );
    });
  });
};

export const addPassword = (name, username, password, icon, url, notes) => {
  return new Promise((resolve, reject) => {
    console.log(`Adding password: ${name}, ${username}, ${password}, ${icon}, ${url}, ${notes}`);
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO passwords (name, username, password, icon, url, notes) VALUES (?, ?, ?, ?, ?, ?)`,
        [name, username, password, icon, url, notes],
        () => {
          console.log("Password added successfully");
          resolve();
        },
        error => {
          console.log("Error adding password " + error.message);
          reject(error);
        }
      );
    });
  });
};

export const getPasswords = (setPasswords) => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM passwords`,
      [],
      (tx, results) => {
        let passwords = [];
        for (let i = 0; i < results.rows.length; i++) {
          let row = results.rows.item(i);
          passwords.push({
            id: row.id,
            name: row.name,
            username: row.username,
            password: row.password,
            icon: row.icon,
            url: row.url,
            notes: row.notes
          });
        }
        setPasswords(passwords);
      },
      error => {
        console.log("Error getting passwords " + error.message);
      }
    );
  });
};

export const updatePassword = (id, name, username, password, icon, url, notes) => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE passwords SET name = ?,username = ?, password = ?, icon = ?, url = ?, notes = ? WHERE id = ?`,
        [name, username, password, icon, url, notes, id],
        () => {
          console.log("Password updated successfully");
          resolve();
        },
        error => {
          console.log("Error updating password " + error.message);
          reject(error);
        }
      );
    });
  });
};

export const clearPasswords = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM passwords`,
        [],
        () => {
          console.log("All passwords deleted successfully");
          resolve();
        },
        error => {
          console.log("Error deleting passwords " + error.message);
          reject(error);
        }
      );
    });
  });
};
export const deletePassword = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM passwords WHERE id = ?`,
        [id],
        () => {
          console.log("Password deleted successfully");
          resolve();
        },
        error => {
          console.log("Error deleting password " + error.message);
          reject(error);
        }
      );
    });
  });
};
