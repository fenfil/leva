import { fetchUser } from '@global/slices/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from '../Header';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className={styles.wrapper}>
      <Header />
      <div>{children}</div>
    </div>
  );
};
