import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test } from '@jest/globals';
import LoginRoute from '../components/loginroute';

test('test login route component', () => {
    render(
        <BrowserRouter>
            <LoginRoute />
        </BrowserRouter>,
    );
});
