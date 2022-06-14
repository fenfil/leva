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
  const [email, setEmail] = useState('');

  const submit = async () => {
    try {
      await api.post('/auth/signup', { email, password, name });
      await dispatch(fetchUser());
      await router.push('/');
    } catch (error) {
      handleError('Error', error);
    }
  };

  return (
    <div className="login">
      <div className="input-form">
        <input placeholder="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-form">
        <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-form">
        <input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="log">
        <button type="button" onClick={submit}>
          sign up
        </button>
      </div>
      <p>
        Already have an Account? <a href="/login">login</a>
      </p>
    </div>
  );
};

export default Page;
