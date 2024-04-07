import React from "react";

const ListUsers = () => {
  const users = Array.from(JSON.parse(localStorage.getItem("users")));

  return (
    <div className="flex flex-col items-center w-600px bg-blue-200 h-screen justify-center font-serif font-weight: 800">
      <div>
        <div className=" font-bold items-center text text-indigo-600 mt-20px">
          All Contacts
        </div>
      </div>

      <div className="">
        {users.map((user) => (
          <a href={"/edit/" + user.id}>
            <div key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.phone}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;
