import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('paragraph test', () => {
    render(<App />);
    const paragraph = screen.getByText(/Bye there!/i);
    expect(paragraph).toBeInTheDocument();
});
