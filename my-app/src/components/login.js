import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles/login.css';
import axios from 'axios';

export default function Login() {
    const [userLog, setUserLog] = useState(
        JSON.parse(window.localStorage.getItem('userData')) || '',
    );
    const navigate = useNavigate();
    const handleSubmit = (reg) => {
        reg.preventDefault();
        const requestURL = 'http://localhost:8000/login';
        axios.post(requestURL, userLog)
            .then((res) => {
                window.localStorage.setItem('userData', res.config.data);
                alert('[SUCCESS]');
                navigate('/home');
            })
            .catch((err) => {
                alert(err.response.data);
            });
    };

    return (
        <div className="materialContainer">
            <div className="title_login">
                <i>Login Form</i>
            </div>
            <div className="main_login">
                <form className="form1_login">
                    <input
                        className="un"
                        data-testid="username"
                        type="text"
                        name="Username"
                        placeholder="Username"
                        required
                        onChange={(e) => setUserLog((prev) => ({ ...prev, username: e.target.value }))
                        }
                    />
                    <input
                        className="pass"
                        data-testid="password"
                        type="password"
                        name="Password"
                        placeholder="Password"
                        required
                        onChange={(e) => setUserLog((prev) => ({ ...prev, password: e.target.value }))
                        }
                    />
                    <input
                        className="submit"
                        data-testid="submit-login"
                        type="submit"
                        name="Submit"
                        value="Submit"
                        onClick={handleSubmit}
                    />
                    <div className="registration" align="center">
                        <Link to="/register">Registration</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
