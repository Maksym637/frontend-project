import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test } from '@jest/globals';
import Auditoriums from '../components/auditoriums';

test('test auditoriums page', () => {
    render(
        <BrowserRouter>
            <Auditoriums />
        </BrowserRouter>,
    );
});
