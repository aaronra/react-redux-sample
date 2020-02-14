import React from 'react';

const Users = ({users, deleteUser}) => {
  const userList = users.length ?
    (
      users.map((user, i) => {
        return (
          <div className="collection-item" key={i}>
            <span className="center"> {user.name} {user.status} {user.age}</span>
            <button className="btn" onClick={() => {
              deleteUser(i)
            }}> Delete
            </button>
          </div>
        )
      })
    ) : (
      <p className="center">no Users</p>
    );
  return (
    <div className="collection">
      {userList}
    </div>
  );
};


export default Users;
