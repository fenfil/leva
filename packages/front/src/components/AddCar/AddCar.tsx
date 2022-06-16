import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { toastr } from 'react-redux-toastr';

export const AddCar = () => {
  const [vin, setVin] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [color, setColor] = useState('');

  const submit = async () => {
    try {
      await api.post('/car', { vin, name, year, mileage, color });
      toastr.success('Машина добавлена', '');
    } catch (error) {
      handleError('Ошибка', error);
    }
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-4 wrapper">
        <legend>Добавить новую машину</legend>
        <div className="mb-3">
          <TextField label="название" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="номер" variant="standard" value={vin} onChange={(e) => setVin(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="год" variant="standard" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="пробег" variant="standard" value={mileage} onChange={(e) => setMileage(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="цвет" variant="standard" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={submit}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};
