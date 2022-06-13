import { setNameRequest } from '@global/api/user';
import { setModal } from '@global/slices/modal';
import { fetchUser } from '@global/slices/user';
import { errorLogger } from '@global/utils/errorLogger';
import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import styles from './style.module.scss';

export const SetNameModal: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    setNameRequest({ firstName, lastName })
      .then(() => {
        toastr.success('Yay', '');
        dispatch(fetchUser());
        setTimeout(() => {
          dispatch(setModal(null));
        }, 500);
      })
      .catch(errorLogger("Can't set name"));
  };

  return (
    <form className={styles.videoModal} onSubmit={submit}>
      <TextField label="First Name " value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <TextField label="Last Name " value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <Button type="submit" variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  );
};

SetNameModal.displayName = 'SetNameModal';

export const key: string = 'set_name';
