import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles/registration.css';
import axios from 'axios';

export default function Register() {
    const [userReg, setUserReg] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (reg) => {
        reg.preventDefault();
        const requestURL = 'http://localhost:8000/user';
        if (
            userReg.password === userReg.confirmPassord
      && userReg.confirmPassord !== undefined
        ) {
            const data = { ...userReg, user_status: false };
            delete data.confirmPassord;
            axios.post(requestURL, data)
                .then(() => {
                    alert('[SUCCESSFUL REGISTRATION]');
                    navigate('/home');
                })
                .catch((err) => {
                    alert(err.response.data);
                });
        } else {
            alert('[PASSWORD ARE NOT SIMILAR]');
        }
    };

    return (
        <form className="log">
            <div className="title_registration">
                <i>Create an account</i>
            </div>
            <div className="main_registration">
                <form className="form1_registration">
                    <input
                        className="username"
                        data-testid="username"
                        type="user"
                        name=""
                        placeholder="Username"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, username: e.target.value }))
                        }
                    ></input>
                    <input
                        className="first-name"
                        data-testid="first_name"
                        type="first_name"
                        name=""
                        placeholder="Name"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, first_name: e.target.value }))
                        }
                    ></input>
                    <input
                        className="last-name"
                        data-testid="last_name"
                        type="last_name"
                        name=""
                        placeholder="Surname"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, last_name: e.target.value }))
                        }
                    ></input>
                    <input
                        className="email"
                        data-testid="email"
                        type="email"
                        name=""
                        placeholder="Email"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, email: e.target.value }))
                        }
                    ></input>
                    <input
                        className="password"
                        data-testid="password"
                        type="password"
                        name=""
                        placeholder="Password"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, password: e.target.value }))
                        }
                    ></input>
                    <input
                        className="password"
                        data-testid="confirm-password"
                        type="password"
                        name=""
                        placeholder="Confirm password"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, confirmPassord: e.target.value }))
                        }
                    ></input>
                    <input
                        className="phone"
                        data-testid="phone"
                        type="phone"
                        name=""
                        placeholder="Phone"
                        required
                        onChange={(e) => setUserReg((prev) => ({ ...prev, phone: e.target.value }))
                        }
                    ></input>
                    <input
                        className="register"
                        data-testid="submit-register"
                        type="submit"
                        name=""
                        value="Register"
                        onClick={handleSubmit}
                    ></input>
                    <Link to="/login">&nbsp; &nbsp; Sign in</Link>
                </form>
            </div>
        </form>
    );
}
