import { useTypedSelector } from '@/store';
import { useOnlyAdmin } from '@global/hooks/useOnlyAdmin';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';

export const Footer = () => {
  const dispatch = useDispatch();
  const user = useTypedSelector((s) => s.user.name);
  const isAdmin = useOnlyAdmin();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4">8</p>
            <span className="h61">лет успешной работы</span>
          </div>
          <div className="col">
            <p className="h4">120 312</p>
            <span className="h61">автомобилей проверено</span>
          </div>
          <div className="col">
            <p className="h4">54 402</p>
            <span className="h61">человек воспользовались нашими услугами</span>
          </div>
          <div className="col">
            <p className="h4">105</p>
            <span className="h61">параметров проверки</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
