import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { useEffect, useState } from 'react';

const allOptions = {
  cars: ['id', 'name', 'vin', 'year', 'mileage', 'color', 'verifierId', 'createdAt', 'updatedAt'],
  users: ['id', 'role', 'name', 'email', 'passwordHash', 'createdAt', 'updatedAt'],
  requests: ['id', 'name', 'phone', 'createdAt', 'updatedAt'],
};

const Select = () => {};

export const Record = ({ model, ...params }) => {
  const [data, setData] = useState({});
  const [field, setField] = useState<string>(null);
  console.log(params);

  const options = allOptions[model];

  useEffect(() => {
    const updateDb = async (e) => {
      if (e.key !== 'Enter') {
        return;
      }
      try {
        await api.post('/admin/update-db', { ...data, model, id: params.id });
        setField(null);
      } catch (error) {
        handleError('Error', error);
      }
    };
    document.addEventListener('keypress', updateDb);
    return () => {
      document.removeEventListener('keypress', updateDb);
    };
  });

  const handleChange = (option: string) => (e) => {
    setData({ ...data, [option]: e.target.value });
  };

  const setInput = async (option: string) => {
    if (['id', 'createdAt', 'updatedAt'].includes(option)) {
      return;
    }
    setData({ ...data, [option]: params[option] });
    setField(option);
  };

  return (
    <tr>
      {options.map((o) =>
        field === o ? (
          <td key={o}>
            <input onChange={handleChange(o)} value={data[o]} />
          </td>
        ) : (
          <td key={o} onDoubleClick={() => setInput(o)}>
            {typeof data[o] === 'undefined' ? params[o] : data[o]}
          </td>
        ),
      )}
    </tr>
  );
};
