import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';
import './styles/home_popup.css';

export default function Home() {
    return (
        <div>
            <div className="description">
                <i>Site&nbsp;&nbsp;for&nbsp;&nbsp;auditoriums&nbsp;&nbsp;reservation</i>
            </div>
            <div>
                <Link to="/auditorium">
                    <button className="nav-button-center">Auditoriums</button>
                </Link>
                <Link to="/reservation">
                    <button className="nav-button-center">Reservations</button>
                </Link>
                <Link to="/book">
                    <button className="nav-button-center">Create Reservation</button>
                </Link>
            </div>
            <div className="wrap">
                <div className="title-left nav-area-ti">
                    <a id="header" href="#popup"><i>help ?</i></a>
                </div>
            </div>
            <div id="popup" className="popup">
                <a href="#header" className="popup__area"></a>
                <div className="popup__body">
                    <div className="popup__content">
                        <a href="#" className="popup__close">✕</a>
                        <div className="popup__title">Description</div>
                        <div>
                            Simple application for reservation auditoriums on a specific time.
                            <p>1.) Here you can reserve auditoriums for a specific date and time from 1 to 5 hours.</p>
                            <p>2.) You have ability to edit and delete your reservation.</p>
                            <p>3.) <a className="note">
                                Remember
                            </a> : you cannot book auditoriums that are already taken.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
