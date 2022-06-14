import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';

const Page = () => {
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
      <div className="service">
        <div className="key">
          <img src="/img/2.png"></img>
          <p>Подбор автомобиля под ключ</p>
        </div>
        <div className="day">
          <p>Выездная комплексная диагностика автомобиля</p>
          <img src="/img/4.png"></img>
        </div>
        <div className="speed">
          <img src="/img/3.png"></img>
          <p>Экспресс подбор</p>
        </div>
        <div className="exp">
          <p>Эксперт на день для проверки комплексной диагностики</p>
          <img src="/img/5.png"></img>
        </div>
      </div>
      <div className="row justify-content-md-center ">
        <form className="col-4 wrapper">
          <legend>Leave your data here</legend>
          <div className="mb-3 ">
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
    </div>
  );
};

export default Page;
