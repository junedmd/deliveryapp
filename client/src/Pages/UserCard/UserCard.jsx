import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL;
import './UserCard.css';
import Navbar from '../../Components/Navbar/Navbar';

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/api/users`)
      .then(res => {
        setUsers(res.data);
        console.log(res.data);
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

      { console.log(users?.data)}
      {users.data?.map(user => (
        <div className="user-card" key={user.id}>
          <h3>{user.name.firstname} {user.name.lastname}</h3>
          <p><strong>Username:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Password:</strong> {user.password}</p>
          <p><strong>City:</strong> {user.address}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default UserCard;

