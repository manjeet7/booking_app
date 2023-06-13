import axios from "axios";
import NetworkService from "./NetworkService";

var resp;

const ApiServices = {
  getRequest: () => {
    return new Promise((resolve, reject) => {
      NetworkService.getConnectivitStatus().then(
        (isOnline) => {
          if (isOnline === true) {
            axios
              .get()
              .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  resp = {
                    success: true,
                    data: response.data,
                    message: "success",
                  };
                  resolve(resp);
                } else {
                  resp = {
                    success: false,
                    data: "",
                    message: "",
                  };
                  resolve(resp);
                }
              })
              .catch((error) => {
                console.log("error is ", error);
                resp = {
                  success: false,
                  data: "",
                  message: error,
                };
                resolve(resp);
              });
          } else {
            resp = {
              success: false,
              data: "",
              message: "NO INTERNET",
            };
            resolve(resp);
          }
        },
        (error) => {
          resp = {
            success: false,
            data: "",
            message: "NO INTERNET",
          };
          resolve(resp);
        }
      );
    });
  },

  postRequest: (apiName, apiPath, params, userToken) => {
    return new Promise((resolve, reject) => {
      NetworkService.getConnectivitStatus().then(
        (isOnline) => {
          if (isOnline === true) {
            const config = {};
            if (userToken !== "") {
              config.headers = {
                Authorization: "Bearer " + userToken,
              };
            }
            console.log("params is ", params);
            axios
              .post(apiName + apiPath, params, config)
              .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  resp = {
                    success: true,
                    data: response.data,
                    message: "success",
                  };
                  resolve(resp);
                } else {
                  resp = {
                    success: false,
                    data: "",
                    message: "",
                  };
                  resolve(resp);
                }
              })
              .catch((error) => {
                console.log("error is ", error);
                resp = {
                  success: false,
                  data: "",
                  message: error,
                };
                resolve(resp);
              });
          } else {
            resp = {
              success: false,
              data: "",
              message: "NO INTERNET",
            };
            resolve(resp);
          }
        },
        (error) => {
          resp = {
            success: false,
            data: "",
            message: "NO INTERNET",
          };
          resolve(resp);
        }
      );
    });
  },
};

export default ApiServices;
