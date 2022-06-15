import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { Box, Tab, Tabs } from '@material-ui/core';
import { useEffect, useState } from 'react';

import { Record } from './Record';
import styles from './styles.module.scss';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const localizedOptions = {
  cars: {
    id: 'id',
    createdAt: 'дата создания',
    updatedAt: 'дата обновления',
    name: 'название',
    year: 'год',
    mileage: 'пробег',
    color: 'цвет',
    verifierId: 'id модератора',
  },
  users: {
    id: 'id',
    role: 'роль',
    name: 'логин',
    email: 'почта',
    passwordHash: 'хэш пароля',
    createdAt: 'дата создания',
    updatedAt: 'дата обновления',
  },
  requests: {
    id: 'id',
    createdAt: 'дата создания',
    updatedAt: 'дата обновления',
    name: 'имя',
    phone: 'телефон',
  },
};
const allOptions = {
  cars: ['id', 'name', 'year', 'mileage', 'color', 'verifierId', 'createdAt', 'updatedAt'],
  users: ['id', 'role', 'name', 'email', 'passwordHash', 'createdAt', 'updatedAt'],
  requests: ['id', 'name', 'phone', 'createdAt', 'updatedAt'],
};

export const DatabaseInfo = () => {
  const [data, setData] = useState<{
    cars: any[];
    users: any[];
    requests: any[];
  }>(null);
  const [sortBy, setSortBy] = useState<string>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(null);
  const [tabIndex, setTabIndex] = useState(0);

  const load = async () => {
    try {
      const res = await api.get('/admin/all');
      setData(res.data);
    } catch (error) {
      handleError('Error', error);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (!data) {
    return null;
  }

  const tab = ['cars', 'users', 'requests'][tabIndex];

  const options = allOptions[tab];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSortDirection(null);
    setSortBy(null);
    setTabIndex(newValue);
  };
  const handleTitleClick = (e) => {
    const key = e.target.innerText;
    if (key === sortBy) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      setSortDirection('asc');
      setSortBy(key);
    }
  };

  const sortedData =
    sortDirection && sortBy
      ? [...data[tab]].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1) * (sortDirection === 'asc' ? 1 : -1))
      : data[tab];

  return (
    <div className="container wrapper mt-4">
      <Tabs value={tabIndex} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Машины" {...a11yProps(0)} />
        <Tab label="Пользователи" {...a11yProps(1)} />
        <Tab label="Заявки" {...a11yProps(2)} />
      </Tabs>
      {sortedData.length ? (
        <table className="table">
          <thead className={styles.thead}>
            <tr>
              {options.map((o) => (
                <td
                  key={o}
                  onClick={handleTitleClick}
                  className={
                    o === sortBy
                      ? sortDirection === 'asc'
                        ? styles.ascCol
                        : sortDirection === 'desc'
                        ? styles.descCol
                        : ''
                      : ''
                  }
                >
                  {localizedOptions[tab][o]}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((d) => (
              <Record {...d} model={tab} key={d.id} />
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};
