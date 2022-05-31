import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test } from '@jest/globals';
import Reservations from '../components/reservations';

test('test reservations page', () => {
    render(
        <BrowserRouter>
            <Reservations />
        </BrowserRouter>,
    );
});
