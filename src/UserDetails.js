//documentacion: 
//https://www.freecodecamp.org/espanol/news/como-usar-axios-con-react/
//https://legacy.reactjs.org/docs/forms.html
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
