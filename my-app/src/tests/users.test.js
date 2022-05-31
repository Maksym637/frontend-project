import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test } from '@jest/globals';
import Users from '../components/users';

test('test users page', () => {
    render(
        <BrowserRouter>
            <Users />
        </BrowserRouter>,
    );
});
