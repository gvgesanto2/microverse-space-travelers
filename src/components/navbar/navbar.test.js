import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from './navbar.component';

let component;

describe('Navbar component', () => {
  beforeEach(() => {
    component = render(<Navbar />, { wrapper: BrowserRouter });
  });

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should navigate to the homepage when clicking the navbar\'s logo', () => {
    const logoLink = screen.getByRole('link', { name: /space travelers/i });

    userEvent.click(logoLink);

    expect(window.location.pathname).toBe('/');
  });

  it('should navigate to the Rockets Page when clicking the rockets navigation link', () => {
    const rocketsNavLink = screen.getByRole('link', { name: 'rockets' });

    userEvent.click(rocketsNavLink);

    expect(window.location.pathname).toBe('/');
  });

  it('should navigate to the Missios Page when clicking the Missions navigation link', () => {
    const missionsNavLink = screen.getByRole('link', { name: 'missions' });

    userEvent.click(missionsNavLink);

    expect(window.location.pathname).toBe('/missions');
  });

  it('should navigate to the MyProfile Page when clicking the my profile navigation link', () => {
    const myProfileNavLink = screen.getByRole('link', { name: 'my profile' });

    userEvent.click(myProfileNavLink);

    expect(window.location.pathname).toBe('/my-profile');
  });
});
