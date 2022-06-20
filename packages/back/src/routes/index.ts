import { Router } from 'express';
import { auth } from 'src/util/auth';
import { UserRole } from 'src/util/UserRole';

import { getApiAllRouter } from './admin';
import { getApiAuthRouter } from './auth';
import { getApiCarRouter } from './car';
import { getApiRequestRouter } from './request';
import { getApiUserRouter } from './user';

export const getRouter = async () => {
  const router = Router();

  router.use('/user', await getApiUserRouter());
  router.use('/auth', await getApiAuthRouter());
  router.use('/car', await getApiCarRouter());
  router.use('/request', await getApiRequestRouter());
  router.use('/admin', auth(UserRole.admin), await getApiAllRouter());

  return router;
};
