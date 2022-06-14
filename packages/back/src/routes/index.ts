import { Router } from 'express';

import { getApiAuthRouter } from './auth';
import { getApiCarRouter } from './car';
import { getApiUserRouter } from './user';

export const getRouter = async () => {
  const router = Router();

  router.use('/user', await getApiUserRouter());
  router.use('/auth', await getApiAuthRouter());
  router.use('/car', await getApiCarRouter());

  return router;
};
