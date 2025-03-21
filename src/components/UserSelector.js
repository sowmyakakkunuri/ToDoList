import React, { useEffect, useState } from "react";

import { getUsers } from "../api/fetchUsers";

const UserSelector = ({ selectedUser, onUserChange, setError }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const userList = await getUsers();
        setUsers(userList);
      } catch (e) {
        setError(e);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <select
        value={selectedUser}
        onChange={(e) => onUserChange(e.target.value)}
      >
        <option value="">Select User</option>
        {users?.map((user, index) => (
          <option key={index} value={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
