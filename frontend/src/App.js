import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/header/Header";
import { Route, Routes } from "react-router-dom";
import Hotel from "./Screens/Hotel/Hotel";
import Home from "./Screens/home/Home";
import List from "./Screens/list/List";
import Login from "./Screens/User/Login";
import Register from "./Screens/User/Register";
import Reserve from "./Component/Reserve/Reserve";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
