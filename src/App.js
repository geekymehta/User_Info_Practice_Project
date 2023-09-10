import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userInput) => {
    // Use the spread operator to create a new array with the updated user list.
    setUsers((prevUsers) => [...prevUsers, userInput]);
    console.log(users); // This will log the previous state, not the updated one.
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList data={users} />
    </div>
  );
}

export default App;
