import React, { useState, useEffect } from 'react';
import './styles/auditoriums.css';
import axios from 'axios';

export default function Auditoriums() {
    const [auditoriums, setAuditoriums] = useState([]);

    useEffect(() => {
        const requestURL = 'http://localhost:8000/auditorium';
        axios.get(requestURL)
            .then((data) => {
                setAuditoriums(data.data);
            });
    }, []);
    return (
        <div>
            <div className="title-auditorium" >
                <i>Auditoriums list</i>
            </div>
            <div>
                <table className="styled-table-auditorium">
                    <thead>
                        <tr>
                            <th><i>Id</i></th>
                            <th><i>Number</i></th>
                            <th><i>Count of people</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            auditoriums.map((auditorium) => (
                                <tr key={auditorium.id}>
                                    <td>{auditorium.id}</td>
                                    <td>{auditorium.number}</td>
                                    <td>{auditorium.max_people}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
