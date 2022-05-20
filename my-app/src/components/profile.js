import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/profile.css';
import axios from 'axios';

export default function User() {
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem('userData')) || {},
    );

    const [oldUser, setOldUser] = useState(
        { oldPassword: user.password, oldUsername: user.username } || '',
    );

    const navigate = useNavigate();
    const saveData = (e) => {
        e.preventDefault();
        const requestURL = 'http://localhost:8000/user';
        const token = btoa(`${user.username}:${user.password}`);
        axios.put(requestURL, user, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
            .then((data) => {
                window.localStorage.setItem('userData', JSON.stringify(data));
                setOldUser({ oldPassword: user.password, oldUsername: user.username });
                alert('[USER UPDATED SUCCESSFULLY]');
            })
            .catch((err) => {
                alert(err.response.data);
            });
    };

    const logout = (out) => {
        out.preventDefault();
        setUser({
            username: undefined,
            first_name: undefined,
            last_name: undefined,
            email: undefined,
            password: undefined,
            phone: undefined,
        });
        alert('[YOU ARE LOGGED OUT]');
        window.localStorage.clear();
        navigate('/login');
    };

    const deleteData = (del) => {
        del.preventDefault();
        setUser({
            username: undefined,
            first_name: undefined,
            last_name: undefined,
            email: undefined,
            password: undefined,
            phone: undefined,
        });
        const requestURL = `http://localhost:8000/user/${oldUser.oldUsername}`;
        const token = btoa(`${oldUser.oldUsername}:${oldUser.oldPassword}`);
        axios.delete(requestURL, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
            .then((data) => {
                window.localStorage.setItem('userData', JSON.stringify(data));
                setOldUser({ oldPassword: undefined, oldUsername: undefined });
                alert('[USER DELETED SUCCESSFULLY]');
                window.localStorage.clear();
            })
            .catch((err) => {
                alert(err.response.data);
            });
        navigate('/login');
    };

    return (
        <div className="wrapper-top">
            <div className="title_profile">
                <i>Personal Information</i>
            </div>
            <div className="row"></div>
            <div>
                <form>
                    <div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <input
                                        data-testid="input-username"
                                        type="text"
                                        id="input-username"
                                        className="form-control form-control-alternative"
                                        placeholder="Username"
                                        defaultValue={user?.username || ''}
                                        onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <input
                                        data-testid="input-email"
                                        type="text"
                                        id="input-email"
                                        className="form-control form-control-alternative"
                                        placeholder="Email"
                                        defaultValue={user?.email || ''}
                                        onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <input
                                        data-testid="input-first-name"
                                        type="text"
                                        id="input-first-name"
                                        className="form-control form-control-alternative"
                                        placeholder="Name"
                                        defaultValue={user?.first_name || ''}
                                        onChange={(e) => setUser((prev) => ({
                                            ...prev,
                                            first_name: e.target.value,
                                        }))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <input
                                        data-testid="input-last-name"
                                        type="text"
                                        id="input-last-name"
                                        className="form-control form-control-alternative"
                                        placeholder="Surname"
                                        defaultValue={user?.last_name || ''}
                                        onChange={(e) => setUser((prev) => ({ ...prev, last_name: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div>
                                    <input
                                        data-testid="input-password"
                                        type="password"
                                        id="input-password"
                                        className="form-control form-control-alternative"
                                        placeholder="Password"
                                        defaultValue={user?.password || ''}
                                        onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div>
                                    <input
                                        data-testid="input-phone"
                                        type="text"
                                        id="input-phone"
                                        className="form-control form-control-alternative"
                                        placeholder="Phone"
                                        defaultValue={user?.phone || ''}
                                        onChange={(e) => setUser((prev) => ({
                                            ...prev,
                                            phone: e.target.value,
                                        }))
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form>
                    <div className="box">
                        <input
                            data-testid="save"
                            type="submit"
                            name=""
                            value="Save"
                            onClick={saveData}
                        ></input>
                        <input
                            data-testid="delete"
                            type="submit"
                            name=""
                            value="Delete account"
                            onClick={deleteData}
                        ></input>
                        <input
                            data-testid="logout"
                            type="submit"
                            name=""
                            value="Log Out"
                            onClick={logout}
                        ></input>
                    </div>
                </form>
            </div>
        </div>
    );
}
