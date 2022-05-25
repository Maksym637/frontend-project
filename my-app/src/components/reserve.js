import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

    // const DeleteData = (del) => {
    //     del.preventDefault();
    //     const requestURL = `http://localhost:8000/access/${accessCreate.auditorium_id}`;
    //     const token = btoa(`${user.username}:${user.password}`);
    //     axios.delete(requestURL, {
    //         headers: {
    //             Authorization: `Basic ${token}`,
    //         },
    //     })
    //         .then(() => {
    //             alert('[RESERVATION DELETED SUCCESSFULLY]');
    //             navigate('/reservation');
    //         })
    //         .catch((err) => {
    //             alert(err.response.data);
    //         });
    // };

    return (
        <form className="box-reserve">
            <div className="title-reserve">
                <i>Create reservation</i>
            </div>
            <div className="main-reserve">
                <form className="form1-reserve">
                    <input
                        className=""
                        data-testid=""
                        type=""
                        name=""
                        placeholder=""
                        required
                        onChange={(e) => setAccessCreate((prev) => ({ ...prev, auditorium_id: e.target.value }))
                        }
                    ></input>
                    <input
                        className=""
                        data-testid=""
                        type=""
                        name=""
                        placeholder=""
                        required
                        onChange={(e) => setAccessCreate((prev) => ({ ...prev, start: e.target.value }))
                        }
                    ></input>
                    <input
                        className=""
                        data-testid=""
                        type=""
                        name=""
                        placeholder=""
                        required
                        onChange={(e) => setAccessCreate((prev) => ({ ...prev, end: e.target.value }))
                        }
                    ></input>
                    <button onClick={CreateData}>Reserve</button>
                </form>
            </div>
        </form>
    );
}
