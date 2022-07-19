import { NavLink, Outlet } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';

import MainContent from '../main-content/main-content';

import './navbar.styles.scss';

const navigationLinks = [
  {
    id: 1,
    title: 'rockets',
    route: '/',
  },
  {
    id: 2,
    title: 'missions',
    route: '/missions',
  },
  {
    id: 3,
    title: 'my profile',
    route: '/my-profile',
  },
];

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <NavLink
          className="navbar__logo"
          to="/"
        >
          <img src={logoImg} alt="logo" className="navbar__logo-img" />
          <p className="navbar__logo-text">Space Travelers&apos; Hub</p>
        </NavLink>

        <nav className="navbar__nav">
          <ul className="navbar__nav-list">
            {navigationLinks.map(({ id, title, route }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) => (isActive
                    ? 'navbar__nav-link navbar__nav-link--active'
                    : 'navbar__nav-link')}
                  to={route}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
