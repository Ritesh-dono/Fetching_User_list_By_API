import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';

const UserList = ({ users, onUserClick }) => {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id} className="user-item" onClick={() => onUserClick(user.id)}>
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <p className="user-name">{user.name}</p>
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired
};

export default UserList;
