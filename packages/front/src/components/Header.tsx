import { useTypedSelector } from '@/store';

import { Navigation } from './Navigation';

export const Header = () => {
  const user = useTypedSelector((s) => s.user.name);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">four wheels</div>
          <nav className="nav">
            <a className="nav__link" href="#">
              About
            </a>
            <a className="nav__link" href="#">
              Service
            </a>
            <a className="nav__link" href="#">
              Work
            </a>
            <a className="nav__link" href="#">
              Verified
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
