import { Layout } from '@/components/Layout/Layout';
import { login } from '@global/slices/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={() => dispatch(login({ name, password }))}>
        Login
      </button>
    </div>
  );
};

export default Page;
