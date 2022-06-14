import { CarsList } from '@/components/CarList/CarsList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <CarsList />
    </div>
  );
};

export default Page;
