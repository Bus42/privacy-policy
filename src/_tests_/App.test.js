import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App component", () => {
  it('renders App component', () => {
    render(<App />);
    const app = screen.getByTestId('App');
    expect(app).toBeInTheDocument();
  });

  it("Renders the Studio42 Dev logo", () => {
    render(<App />);
    const logo = screen.getByAltText(/Studio42 rocket logo/i);
    expect(logo).toBeInTheDocument();
  })
})
