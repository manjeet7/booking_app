const SessionStorageService = {
  setSessionStorage: (itemName, itemData) => {
    sessionStorage.setItem(itemName, JSON.stringify(itemData));
    console.log("Data set successfully in session storage");
  },

  getSessionStorage: (itemName) => {
    return new Promise((resolve, reject) => {
      var storageData = JSON.parse(sessionStorage.getItem(itemName));
      resolve(storageData);
    });
  },

  clearSessionStorage: () => {
    sessionStorage.clear();
    console.log("Session storage cleared successfully");
  },
  learSessionStorage: (itemname) => {
    localStorage.removeItem(itemname);
  },
};

export default SessionStorageService;
