import { CleanCar } from '@global/slices/cars';

import styles from './styles.module.scss';

export const Car = ({ car }: { car: CleanCar }) => {
  return (
    <div className={styles.car}>
      <div>{car.name}</div>
    </div>
  );
};
