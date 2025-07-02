import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserCard.css';
import Navbar from '../../Components/Navbar/Navbar';

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch users:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader">Loading users...</div>;

  return (
    <>
    <Navbar/>
    <div className="user-grid">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h3>{user.name.firstname} {user.name.lastname}</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default UserCard;

