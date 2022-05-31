import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import Register from '../components/register';

test('test register username', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const inputUsername = screen.getByTestId('username');
    fireEvent.change(inputUsername, { target: { value: 'U1' } });
    expect(inputUsername.value).toBe('U1');
});

test('test register first_name', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const inputFName = screen.getByTestId('first_name');
    fireEvent.change(inputFName, { target: { value: 'user1' } });
    expect(inputFName.value).toBe('user1');
});

test('test register last_name', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const inputLName = screen.getByTestId('last_name');
    fireEvent.change(inputLName, { target: { value: 'user1' } });
    expect(inputLName.value).toBe('user1');
});

test('test register email', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const inputEmail = screen.getByTestId('email');
    fireEvent.change(inputEmail, { target: { value: 'user1@gmail.com' } });
    expect(inputEmail.value).toBe('user1@gmail.com');
});

test('test register password', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const inputPassword = screen.getByTestId('password');
    fireEvent.change(inputPassword, { target: { value: '111222' } });
    expect(inputPassword.value).toBe('111222');
});

test('test register confirm password', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const inputPasswordConfirm = screen.getByTestId('confirm-password');
    fireEvent.change(inputPasswordConfirm, { target: { value: '111222' } });
    expect(inputPasswordConfirm.value).toBe('111222');
});

test('test submit button', () => {
    render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>,
    );
    const submit = screen.getByTestId('submit-register');
    fireEvent.click(submit);
});
