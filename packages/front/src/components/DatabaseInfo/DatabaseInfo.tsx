import { api } from '@global/utils/api';
import { handleError } from '@global/utils/handleError';
import { Box, Tab, Tabs } from '@material-ui/core';
import { useEffect, useState } from 'react';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const DatabaseInfo = () => {
  const [data, setData] = useState<{
    cars: any[];
    users: any[];
    requests: any[];
  }>(null);
  const [tabIndex, setTabIndex] = useState(0);

  const load = async () => {
    try {
      const res = await api.get('/all');
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

  const options = Array.from(Object.keys(data[tab][0]));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <div className="container wrapper mt-4">
      <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Cars" {...a11yProps(0)} />
        <Tab label="Users" {...a11yProps(1)} />
        <Tab label="Requests" {...a11yProps(2)} />
      </Tabs>
      {data[tab].length && (
        <table className="table">
          <thead>
            <tr>
              {options.map((o) => (
                <td key={o}>{o}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data[tab].map((d) => (
              <tr key={d.id}>
                {options.map((o) => (
                  <td key={o}>{d[o]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
