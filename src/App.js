import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Loader } from 'rsuite';

function App() {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(res => {
        setUsers(res.data);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <div className='container user'>
        <div class="card text-bg-primary mb-3">
          <div className='card-header'>
            Users List
          </div>
        </div>
        {users ? (
          users.map((user) => {
            return (
              <div className='card crd' key={user.name} onClick={() => handleUserClick(user)}>
                <div class="card-body">
                  <img className='img' src='{user.avatar}' alt='user-profile' />
                  <span className='card-title'>{user.profile.firstName}</span>
                  <span className='card-title'>{user.profile.lastName}</span>
                </div>
              </div>
            );
          })
        ) : (
          <Loader center content="loading" />
        )}
      </div>
      <div className='container details'>
      <div class="card details-card">
          <div className='card-header text-bg-primary mb-3 '>
            User Details
          </div>
      {selectedUser ? (
          <div class="card-body">
            <img className='img img-details' src='{user.avatar}' alt='user-profile' />
            <p className='username'>@{selectedUser.profile.username}</p>
              <ul class="list-group">
                Bio
                <li class="list-group-item list-group-item-secondary rounded">{selectedUser.Bio}</li>
                Full Name:
                <li class="list-group-item list-group-item-secondary rounded">
                  <span>
                    {selectedUser.profile.firstName}
                  </span> 
                  <span>
                    {selectedUser.profile.lastName}
                  </span>
                </li>
                Job Title:
                <li class="list-group-item list-group-item-secondary rounded">{selectedUser.jobTitle}</li>
                E-Mail:
                <li class="list-group-item list-group-item-secondary rounded">{selectedUser.profile.email}</li>
              </ul>
          </div>
        
      ) : null}
      </div>
      </div>
    </div>
  );
  
}


export default App;