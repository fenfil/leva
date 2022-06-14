import { addCar } from '@global/slices/cars';
import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';

const Page = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const request = async () => {
    try {
      await api.post('/request', { name, phone });
      toastr.success('We will call you back soon', '');
    } catch (error) {
      handleError('Error', error);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <TextField label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <TextField label="Phone" variant="standard" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={request}>
            Request call
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
