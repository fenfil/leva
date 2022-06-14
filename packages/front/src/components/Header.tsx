import { useTypedSelector } from '@/store';
import { logout } from '@global/slices/user';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useTypedSelector((s) => s.user.name);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a href="/" className="header__logo">
            Four wheels
          </a>
          <nav className="nav">
            <a className="nav__link" href="/add">
              Add Car
            </a>
            <a className="nav__link" href="/about">
              About
            </a>
            <a className="nav__link" href="/service">
              Service
            </a>
            <a className="nav__link" href="/verified">
              Verified
            </a>
            <a className="nav__link" href="/request">
              Request
            </a>
            {user ? (
              <span className="nav__user" onClick={() => dispatch(logout())}>
                {user}
              </span>
            ) : (
              <a className="nav__link" href="/login">
                login
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
