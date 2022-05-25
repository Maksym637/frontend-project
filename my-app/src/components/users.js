import React, { useState, useEffect } from 'react';
import './styles/universal.css';
import axios from 'axios';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const requestURL = 'http://localhost:8000/user';
        axios.get(requestURL)
            .then((data) => {
                setUsers(data.data);
            });
    }, []);
    return (
        <div>
            <div className="title" >
                <i>Users list</i>
            </div>
            <div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th><i>Id</i></th>
                            <th><i>Username</i></th>
                            <th><i>Name</i></th>
                            <th><i>Surname</i></th>
                            <th><i>Email</i></th>
                            <th><i>Phone</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
