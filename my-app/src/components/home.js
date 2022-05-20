import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

export default function Home() {
    return (
        <div>
            <div className="description">
                <i>Here you can reserve a specific audience from 1 to 5 hours</i>
            </div>
            <div>
                <Link to="/auditorium">
                    <button className="nav-button-center">Auditoriums</button>
                </Link>
                <Link to="/reservation">
                    <button className="nav-button-center">Reservations</button>
                </Link>
                <Link to="/reservation">
                    <button className="nav-button-center">Create Reservation</button>
                </Link>
            </div>
        </div>
    );
}
