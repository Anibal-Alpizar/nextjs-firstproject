import React from "react";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li>
          <div key={user.id}>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.first_name} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
