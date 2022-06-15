import { useTypedSelector } from '@/store';
import { useOnlyAdmin } from '@global/hooks/useOnlyAdmin';
import { fetchUser, logout } from '@global/slices/user';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useTypedSelector((s) => s.user.name);
  const isAdmin = useOnlyAdmin();

  const submitLogout = async () => {
    await dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="header__inner">
          <a href="/" className="header__logo">
            Four wheels
          </a>
          <nav className="nav">
            {isAdmin && (
              <a className="nav__link" href="/admin">
                Админка
              </a>
            )}
            <a className="nav__link" href="/about">
              О нас
            </a>
            <a className="nav__link" href="/verified">
              Машины
            </a>
            {user ? (
              <span className="nav__user" onClick={submitLogout}>
                {user}
              </span>
            ) : (
              <a className="nav__link" href="/login">
                Войти
              </a>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
