import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignUp from "./components/LoginSignUp";
import ListUsers from "./components/ListUsers";
import ViewUser from "./components/ViewUser";
import EditUser from "./components/EditUser";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("users")) {
      // store the users in the browser's local storage to persist them across page reloads
      localStorage.setItem("users", JSON.stringify([]));
    } else {
      // get the users from the browser's local storage
      const users = JSON.parse(localStorage.getItem("users"));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<ListUsers />} />
        <Route path="/view/:id" element={<ViewUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route exact path="/" element={<LoginSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
