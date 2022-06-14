import { Layout } from '@/components/Layout/Layout';
import { login } from '@global/slices/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <div className="input-form">
        <input placeholder="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input-form">
        <input placeholder="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="log">
        <button type="button" onClick={() => dispatch(login({ name, password }))}>
          Login
        </button>
      </div>
      <p>
        Don't have an account?{' '}
        <a href="signup" className="forget">
          sign up
        </a>
      </p>
    </div>
  );
};

export default Page;
