import React, { useState } from "react";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const LoginSignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = Array.from(JSON.parse(localStorage.getItem("users")));
    loggedInUser = users.find(
      (user) => user.name == name && user.password == password
    );
    localStorage.setItem("loggedInUser", loggedInUser.id);
    window.location = "/home";
  };

  const handleSignup = () => {
    const users = Array.from(JSON.parse(localStorage.getItem("users")));
    const newUsers = [...users, { id: users.length, name, phone, password }];
    localStorage.setItem("loggedInUser", users.length);
    localStorage.setItem("users", JSON.stringify(newUsers));
    window.location = "/home";
  };

  const handleClickHere = () => {};

  return (
    <div className="flex flex-col items-center bg-blue-200 h-screen justify-center font-serif">
      <div>
        <div className=" font-bold items-center text text-indigo-600 text-2xl">
          Sign Up
        </div>
      </div>

      <div className="flex flex-col border-2 border-indigo-400 px-8 py-20 mt-8 rounded gap-6">
        <div className="flex gap-6 ">
          <img className="h-6 w-6" src={user_icon} alt="" />
          <input
            className="px-4 py-2 rounded w-72"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="flex gap-6 ">
          <img className="h-6 w-6" src={email_icon} alt="" />
          <input
            className="px-4 py-2 rounded w-72"
            type="email"
            placeholder="Email Id"
          />
        </div>

        <div className="flex gap-6 ">
          <img className="h-6 w-6" src={password_icon} alt="" />
          <input
            className="px-4 py-2 rounded w-72"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="font-bold mt-4 font-serif ">
          Lost Password?{" "}
          <span>
            <button onClick={handleClickHere}>Click Here</button>
          </span>
        </div>

        <div className="font-bold flex  font-serif justify-between">
          <button onClick={handleSignup}>Sign Up</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};
export default LoginSignUp;
