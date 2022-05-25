import React, { useState, useEffect } from 'react';
import './styles/universal.css';
import axios from 'axios';

export default function Reservations() {
    const [accesses, setAccess] = useState([]);

    useEffect(() => {
        const requestURL = 'http://localhost:8000/access';
        axios.get(requestURL)
            .then((data) => {
                setAccess(data.data);
            });
    }, []);
    return (
        <div>
            <div className="title" >
                <i>Reservations list</i>
            </div>
            <div>
                {accesses.length === 0
                    ? <div className="title_none">
                        <i>There is no reservations yet</i>
                    </div>
                    : <table className="styled-table">
                        <thead>
                            <tr>
                                <th><i>Id</i></th>
                                <th><i>User id</i></th>
                                <th><i>Auditorium id</i></th>
                                <th><i>Reserved-Time-Start</i></th>
                                <th><i>Reserved-Time-End</i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                accesses.map((access) => (
                                    <tr key={access.id}>
                                        <td>{access.id}</td>
                                        <td>{access.user_id}</td>
                                        <td>{access.auditorium_id}</td>
                                        <td>{access.start}</td>
                                        <td>{access.end}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
}
