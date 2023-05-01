import React, { Component } from 'react';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8080';

//const baseURL = 'http://10.0.2.129:8080';
//const baseURL = 'http://192.168.1.192:8080';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
        };
        axios.post(baseURL + '/users', user)
            .then(response => {
                this.props.onUserAdded(response.data.user);
                console.log(response.data.user);
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { name, username, email } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Username:
                        <input type="text" name="username" value={username} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" name="email" value={email} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <button type="submit">Create User</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;
