import React from 'react';

const UserDetails = ({user, width}) => {
  return (
    <>
      <img  src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width={width} alt="Image user"/>
      <h2>{user.name}</h2>
      <h2>Role: {user.role}</h2>
      <br/>
      <p style={{fontSize: '1.5rem'}}>{user.email}</p>
    </>
  )
}

export default UserDetails;
