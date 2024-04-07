import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const params = useParams();
  const users = Array.from(JSON.parse(localStorage.getItem("users")));
  const editUser = users.find((user) => user.id === parseInt(params.id));
  const [name, setName] = useState(editUser?.name);
  const [phone, setPhone] = useState(editUser?.phone);

  const handleUpdate = () => {
    const updatedUsers = users.map((user) => {
      if (user.id === parseInt(params.id)) {
        return {
          ...user,
          name: name,
          phone: phone,
        };
      }
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    window.location = "/home";
  };
  return (
    <div className="flex flex-col items-center w-600px bg-blue-200 h-screen flex-center font-serif font-weight: 500">
      <div>
        <div className=" font-bold items-center text text-indigo-600 ">
          View Contact: {editUser?.name}
        </div>
      </div>

      <div className="">
        <div>
          <div className="font-bold items-center text">Name:</div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="font-bold items-center text text">Phone:</div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
