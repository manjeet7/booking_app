import React from "react";
import styles from "../../styles/login.css";
import { useRef } from "react";

// import logo from "../../assets/logo_1.png";
import { useNavigate } from "react-router-dom";

import {
  API_PATH,
  ERR_SERVER_CONNECT,
  API_LOGIN,
} from "../../Constant/apiConstans";
import ApiServices from "../../Services/ApiService";
import SessionStorageService from "../../Services/SessionStorageService";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate;

  const data1 = "";
  const handleClick = async (e) => {
    e.preventDefault();
    var requestData = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log("Email/mobile number: ", email.current.value);
    console.log("Password: ", password.current.value);

    ApiServices.postRequest(API_PATH, API_LOGIN, requestData, "").then(
      (result) => {
        console.log("API service response: ", result);
        if (result.success === true) {
          alert("Login Successful!");

          console.log("token: ", result.data.token);
          console.log("user-data: ", result);
          SessionStorageService.setSessionStorage(
            "userAccessToken",
            result.data.token
          );
          SessionStorageService.setSessionStorage("userData", result.data.data);
          navigate("/");
        } else {
          alert(result.message);
        }
      },
      (error) => {
        console.log("API service error: ", error);
        alert(ERR_SERVER_CONNECT);
      }
    );
  };

  const handleForget = (e) => {
    e.preventDefault();
    navigate("/forgot");
  };
  const handleRegister = (e) => {
    navigate("/register");
  };

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.loginWrapper}>
          <div className={styles.loginLeft}>
            <img src=""></img>
            <h3 className={styles.loginLogo}>Farmer's Connect</h3>
            <span className={styles.loginDesc}>
              Communicate with your fellow farmers on Farmer's Connect!
            </span>
          </div>
          <div className={styles.loginRight}>
            <form className={styles.loginBox} onSubmit={handleClick}>
              <span className={styles.loginLabel}>Login</span>
              <input
                placeholder="User Id"
                type="text"
                required
                className={styles.loginInput}
                ref={email}
              />

              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className={styles.loginInput}
                ref={password}
              />
              {/* <button
                className={styles.loginButton}
                type="submit"
                disabled={isFetching}
              >
                {isFetching ? "loading" : "Log in"}
              </button> */}
              <button
                type="submit"
                className={styles.loginRegisterButton}
                onClick={handleClick}
              >
                login
              </button>
              <span className={styles.loginForgot} onClick={handleForget}>
                Forgot Password?
              </span>
              <button
                className={styles.loginRegisterButton}
                onClick={handleRegister}
                type="button"
              >
                Create a New Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
