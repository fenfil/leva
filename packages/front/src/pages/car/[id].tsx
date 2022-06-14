import { CleanCar } from '@global/slices/cars';
import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<CleanCar>(null);

  const load = async () => {
    try {
      const res = await api.get<CleanCar>(`/car/${id}`);
      if (res.data) {
        setData(res.data);
      }
    } catch (error) {
      handleError('Error', error);
    }
  };

  useEffect(() => {
    if (!id) return;
    load();
  }, [id]);

  if (!data) {
    return null;
  }

  const options = Array.from(Object.entries(data));

  return (
    <div className="container">
      <table className="table">
        <tbody>
          {options.map((o) => (
            <tr key={o[0]}>
              <td>{o[0]}</td>
              <td>{o[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.name} {data.verified ? 'verified' : 'not verified'}
    </div>
  );
};

export default Page;
