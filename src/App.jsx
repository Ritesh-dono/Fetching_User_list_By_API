import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList.jsx';
import UserDetails from './components/UserDetails.jsx';
import './App.css';
import './components/UserDetail.css';
import './components/UserList.css';

const mockAdditionalUserData = (users) => {
  const names = [
    'Taylor Swift', 'Jane Smith', 'Alice Johnson', 'Robert Brown',
    'Emily Davis', 'Michael Miller', 'Sarah Wilson', 'David Moore',
    'Laura Taylor', 'James Anderson'
  ];

  return users.map((user, index) => ({
    ...user,
    name: names[index % names.length], 
    email: `user${index + 1}@example.com`,
    phone: `123-456-789${index}`,
    occupation: `Occupation ${index + 1}`,
  }));
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(response => {
        const enrichedUsers = mockAdditionalUserData(response.data);
        setUsers(enrichedUsers);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const handleUserClick = (id) => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);
  };

  return (
    <div className="app">
      {loading ? (
        <p id='load'>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="background-container">
          <UserList users={users} onUserClick={handleUserClick} />
          <UserDetails user={selectedUser} />
        </div>
      )}
      <div className="background-image"></div>
    </div>
  );
};

export default App;
