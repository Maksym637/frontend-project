import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/reserve.css';
import axios from 'axios';

export default function Reserve() {
    const [user] = useState(
        JSON.parse(window.localStorage.getItem('userData')) || {},
    );

    const [accessCreate, setAccessCreate] = useState('');

    const navigate = useNavigate();

    const CreateData = (crt) => {
        crt.preventDefault();
        const requestURL1 = `http://localhost:8000/user/${user.username}`;
        const requestURL2 = 'http://localhost:8000/access';
        const token = btoa(`${user.username}:${user.password}`);
        axios.get(requestURL1, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
            .then((resp) => {
                const data = { ...accessCreate, user_id: resp.data.id };
                axios.post(requestURL2, data, {
                    headers: {
                        Authorization: `Basic ${token}`,
                    },
                })
                    .then(() => {
                        alert('[RESERVATION CREATED SUCCESSFULLY]');
                        navigate('/reservation');
                    })
                    .catch((err) => {
                        alert(err.response.data);
                    });
            });
    };

    const DeleteData = (del) => {
        del.preventDefault();
        const requestURL = `http://localhost:8000/access/${accessCreate.auditorium_id}`;
        const token = btoa(`${user.username}:${user.password}`);
        axios.delete(requestURL, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
            .then(() => {
                alert('[RESERVATION DELETED SUCCESSFULLY]');
            })
            .catch((err) => {
                alert(err.response.data);
            });
    };

    return (
        <form className="box-reserve">
            <div className="title-reserve">
                <i>Reservation</i>
            </div>
            <div className="main-reserve">
                <form className="form1-reserve">
                    <br></br>
                    <div className="input">
                        <i>Input the auditorium id</i>
                    </div>
                    <input
                        className="number-reserve"
                        data-testid="input-number-reserve"
                        type="text"
                        placeholder="id"
                        required
                        onChange={(e) => setAccessCreate((prev) => ({ ...prev, auditorium_id: e.target.value }))
                        }
                    ></input>
                    <div className="input">
                        <i>Input the start time of reservation</i>
                    </div>
                    <input
                        className="start-reserve"
                        data-testid="input-start-reserve"
                        type="text"
                        placeholder="y-m-d h:m:s"
                        required
                        onChange={(e) => setAccessCreate((prev) => ({ ...prev, start: e.target.value }))
                        }
                    ></input>
                    <div className="input">
                        <i>Input the end time of reservation</i>
                    </div>
                    <input
                        className="end-reserve"
                        data-testid="input-end-reserve"
                        type="text"
                        placeholder="y-m-d h:m:s"
                        required
                        onChange={(e) => setAccessCreate((prev) => ({ ...prev, end: e.target.value }))
                        }
                    ></input>
                </form>
                <div className="box">
                    <input
                        data-testid="submit"
                        type="submit"
                        name="submit"
                        value="Reserve"
                        onClick={CreateData}
                    ></input>
                    <input
                        data-testid="submit"
                        type="submit"
                        name="submit"
                        value="Delete reservation"
                        onClick={DeleteData}
                    ></input>
                </div>
                <div className="reservation">
                    <Link to="/reservation">See all reservations</Link>
                </div>
            </div>
        </form>
    );
}
