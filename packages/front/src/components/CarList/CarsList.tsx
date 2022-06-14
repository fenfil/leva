import { useTypedSelector } from '@/store';
import { fetchCars } from '@global/slices/cars';
import { logout } from '@global/slices/user';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Car } from '../Car/Car';
import styles from './styles.module.scss';

export const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useTypedSelector((s) => s.car.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className={styles.carsList}>
      {cars.map((c) => (
        <Car key={c.id} car={c} />
      ))}
    </div>
  );
};
