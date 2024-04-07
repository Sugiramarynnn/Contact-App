import React from "react";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const params = useParams();
  const users = Array.from(JSON.parse(localStorage.getItem("users")));
  const viewUser = users.find((user) => user.id === parseInt(params.id));

  return (
    <div className="flex flex-col items-center w-600px bg-blue-200 h-screen content-around  justify-center font-serif font-weight: 500">
      <div>
        <div className=" font-bold items-center text text-indigo-600 ">
          View Contact: {viewUser?.name}
        </div>
      </div>
      <div className="">
        <div>{viewUser.id}</div>
        <div>{viewUser.name}</div>
        <div>{viewUser.phone}</div>
      </div>
    </div>
  );
};

export default ViewUser;
