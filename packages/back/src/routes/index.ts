import { Router } from 'express';

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
  router.use('/admin', await getApiAllRouter());

  return router;
};
