import { fetchUser } from '@global/slices/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
