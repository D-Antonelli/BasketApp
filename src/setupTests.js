import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";

it('renders welcome message', () => {
    render(<App/>);
    expect(screen.getByText('Hello Basket')).toBeInTheDocument();
});
