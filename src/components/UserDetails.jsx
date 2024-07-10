import React from 'react';
import './UserDetail.css';

const UserDetails = ({ user }) => {
  if (!user) {
    return <p></p>;
  }

  return (
    <div className="user-details">
      <img src={user.avatar} alt={user.name} className="user-avatar-large" />
      <h2 id="name">{user.name}</h2>
      <p className="email"><strong>Email:</strong> <span id='detail'>{user.email}</span></p>
      <p className="phone"><strong>Phone:</strong> <span id='detail'>{user.phone}</span></p>
      <p className="occupation"><strong>Occupation:</strong> <span id='detail'>{user.occupation}</span></p>
    </div>
  );
};

export default UserDetails;
