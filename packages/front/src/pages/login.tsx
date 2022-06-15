import { fetchUser } from '@global/slices/user';
import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    try {
      await api.post('/auth/login', { name, password });
      await dispatch(fetchUser());
      await router.push('/');
    } catch (error) {
      handleError('Ошибка', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="wrapper col-5">
          <div className="input-form">
            <input placeholder="логин" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-form">
            <input
              placeholder="пароль"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="log">
            <button type="button" onClick={submit}>
              Войти
            </button>
          </div>
          <p>
            Еще нет аккаунта?{' '}
            <a href="signup" className="forget">
              зарегистрироваться
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
