import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import Login from '../components/login';

test('renders login username', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>,
    );
    const inputUsername = screen.getByTestId('username');
    fireEvent.change(inputUsername, { target: { value: 'U1' } });
    expect(inputUsername.value).toBe('U1');
});

test('rendes login password', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>,
    );
    const inputPassword = screen.getByTestId('password');
    fireEvent.change(inputPassword, { target: { value: '111222' } });
    expect(inputPassword.value).toBe('111222');
});

test('renders login submit button', () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>,
    );
    const submit = screen.getByTestId('submit-login');
    fireEvent.click(submit);
});
