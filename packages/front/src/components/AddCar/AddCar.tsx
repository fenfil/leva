import { CleanCar } from '@global/slices/cars';
import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { toastr } from 'react-redux-toastr';

import styles from './styles.module.scss';

export const AddCar = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [color, setColor] = useState('');

  const submit = async () => {
    try {
      await api.post('/car', { name, year, mileage, color });
      toastr.success('Car added', '');
    } catch (error) {
      handleError('Error', error);
    }
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-4 wrapper">
        <legend>Add new car</legend>
        <div className="mb-3">
          <TextField label="name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="year" variant="standard" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="mileage" variant="standard" value={mileage} onChange={(e) => setMileage(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="color" variant="standard" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
