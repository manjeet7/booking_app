import React from "react";
import styles from "../../styles/register.css";
import { useRef } from "react";

// import logo from "../../assets/logo_1.png";
import { useNavigate } from "react-router-dom";
import {
  API_PATH,
  API_REGISTER,
  ERR_SERVER_CONNECT,
} from "../../Constant/apiConstans";
import ApiServices from "../../Services/ApiService";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const userMobile = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      // passwordAgain.current.setCustomValidity("Passwords don't match!");
      alert("Passwords don't match!");
    } else {
      var requestData = {
        username: username.current.value,
        email: email.current.value,
        mobile: userMobile.current.value,
        gender: "M",
        password: password.current.value,
      };

      ApiServices.postRequest(API_PATH, API_REGISTER, requestData, "").then(
        (result) => {
          console.log("API service response: ", result);
          if (result.success === true) {
            alert("User created successfully");
            navigate("/home");
          } else {
            alert(result.message);
          }
        },
        (error) => {
          console.log("API service error: ", error);
          alert(ERR_SERVER_CONNECT);
        }
      );
    }
  };

  const handleLoginRedirect = (e) => {
    navigate("/login");
  };

  return (
    <>
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
              <span className={styles.registerLabel}>Register</span>
              <input
                placeholder="Username"
                required
                ref={username}
                className={styles.loginInput}
              />
              <input
                placeholder="Email"
                type="email"
                required
                ref={email}
                className={styles.loginInput}
              />
              <input
                placeholder="Mobile Number"
                type="number"
                required
                ref={userMobile}
                className={styles.loginInput}
              />
              <input
                placeholder="Password"
                type="password"
                minLength="6"
                required
                ref={password}
                className={styles.loginInput}
              />
              <input
                placeholder="Confirm Password"
                type="password"
                required
                ref={passwordAgain}
                className={styles.loginInput}
              />
              <button className={styles.loginRegisterButton} type="submit">
                Sign Up
              </button>
              <span
                className={styles.loginPageLink}
                onClick={handleLoginRedirect}
              >
                Login to Account!
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
