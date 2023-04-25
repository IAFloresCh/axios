import React, { Component } from 'react';
import axios from 'axios';
import CreateUser from './CreateUser';
import UserDetails from './UserDetails';

//const baseURL = 'http://127.0.0.1:8080';

//const baseURL = 'http://10.0.2.129:8080';
const baseURL = 'http://192.168.1.192:8080';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: null,
    };
  }

  componentDidMount() {
    this.getUsers();
  }


  getUsers() {
    axios.get(baseURL + '/users')
      .then(response => {
        this.setState({ users: response.data.users });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleUserClick = user => {
    this.setState({ selectedUser: user });
  };

  handleUserAdded = user => {
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }));
  }


  render() {
    const { users, selectedUser } = this.state;

    return (
      <div className="container">

        <div className="create-user">
          <h2>Crear Usuario</h2>
          <CreateUser onUserAdded={this.handleUserAdded} />
        </div>

        <div className="user-list">
        <h2>Lista Usuarios</h2>
          <ul>
            {users.map(user => (
              <li key={user.id} onClick={() => this.handleUserClick(user)}>
                {user.name}  {user.username}  {user.email}
              </li>
            ))}
          </ul>
        </div>

        <div className="user-details">
          <h2>Detalles</h2>
          {selectedUser && <UserDetails user={selectedUser} />}
        </div>


      </div>

    );
  }
}

export default UserList;
