import { Link, Outlet } from 'react-router-dom';

import MainContent from '../main-content/main-content.component';

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
      <header className="header">
        <div className="header__content">
          <Link to="/">
            <span className="header__logo">Logo</span>
          </Link>

          <nav className="header__nav">
            <ul className="header__nav-list">
              {navigationLinks.map(({ id, title, route }) => (
                <li key={id}>
                  <Link className="header__nav-link" to={route}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}
