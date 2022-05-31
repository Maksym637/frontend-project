import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { expect, test } from '@jest/globals';
import Navbar from '../components/navbar';

test('test navbar', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>,
    );
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument();
});
