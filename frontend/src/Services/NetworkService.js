const NetworkService = {
  getConnectivitStatus: () => {
    return new Promise((resolve, reject) => {
      if (navigator.onLine === true) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },
};

export default NetworkService;
