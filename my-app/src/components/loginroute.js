import React from 'react';
import Login from './login';

export default function LoginRoute({ component: Component }) {
    const credentials = JSON.parse(window.localStorage.getItem('userData'));
    return credentials ? <Component /> : <Login />;
}
