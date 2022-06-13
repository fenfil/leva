import { Layout } from '@/components/Layout/Layout';
import { login, signup } from '@global/slices/user';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <input placeholder="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="email" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input placeholder="password" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="button" onClick={() => dispatch(signup({ name, password, email }))}>
        Signup
      </button>
      <p>
        Already have an Account? <a href="/login">login</a>
      </p>
    </div>
  );
};

export default Page;
