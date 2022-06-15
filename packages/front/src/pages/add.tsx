import { addCar } from '@global/slices/cars';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <TextField label="Car title" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={() => dispatch(addCar({ name }))}>
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
