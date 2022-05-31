import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test } from '@jest/globals';
import Home from '../components/home';

test('test home page', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>,
    );
});
