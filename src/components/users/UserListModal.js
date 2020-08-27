import React, { useState, useEffect} from 'react'
import UserItem from './UserItem';

const UserListModal = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  getUsers();
  //eslint-diasble-next-line //
}, []);

const getUsers = async () => {
  setLoading(true);
  const res = await fetch('/users');
  const data = await res.json();

  setUsers(data);
  setLoading(false);
}


  return (
    <div id="user-list-modal" className="modal">
      <div className="modal-content">
        <h4>User List</h4>
        <ul className="collection">
          {!loading && users.map(user => 
            <UserItem user={user} key={user.id}/>)}
        </ul>
      </div>
    </div>
  );
};

export default UserListModal;