import { CleanCar } from '@global/slices/cars';
import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { toastr } from 'react-redux-toastr';

import styles from './styles.module.scss';

export const Car = ({ car }: { car: CleanCar }) => {
  const [verified, setVerified] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setVerified(car.verified);
  }, [car.verified]);
  const verify = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await api.post('/car/verify', { carId: car.id });
      toastr.success('Verified', '');
      setVerified(true);
    } catch (error) {
      handleError('Error', error);
    }
  };
  return (
    <div className={styles.car} onClick={() => router.push(`/car/${car.id}`)}>
      <div>{car.name}</div>
      <div>{car.year}</div>
      {verified ? (
        ''
      ) : (
        <button type="button" className="btn btn-success" onClick={verify}>
          verify
        </button>
      )}
    </div>
  );
};
