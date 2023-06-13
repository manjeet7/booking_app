import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SessionStorageService from "../../Services/SessionStorageService";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const sendUser = (context) => {
    if (context === "login") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };
  const clearUser = async () => {
    await SessionStorageService.clearSessionStorage("userData");
  };
  useEffect(() => {
    const getUser = async () => {
      const data = await SessionStorageService.getSessionStorage("userData");
      console.log("user in navbar", data);
      setUser(data);
    };
    getUser();
  }, []);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/">
          <span className="logo">lamabooking</span>
        </Link>

        <div className="navItems">
          {!user ? (
            <>
              <button
                className="navButton"
                onClick={() => sendUser("register")}
              >
                Register
              </button>
              <button className="navButton" onClick={() => sendUser("login")}>
                Login
              </button>
            </>
          ) : (
            <>
              <h3>{user.username}</h3>
              <button className="navButton" onClick={clearUser}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
