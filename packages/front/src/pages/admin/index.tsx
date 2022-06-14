import { AddCar } from '@/components/AddCar/AddCar';
import { CarsList } from '@/components/CarList/CarsList';
import { useOnlyAdmin } from '@global/hooks/useOnlyAdmin';
import { fetchUser } from '@global/slices/user';
import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { useRouter } from 'next/dist/client/router';
import ErrorPage from 'next/error';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Page = () => {
  const isAdmin = useOnlyAdmin();

  if (!isAdmin) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="container">
      <AddCar />
      <CarsList />
    </div>
  );
};

export default Page;
