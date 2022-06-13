import { Router } from 'express';

import { getApiAuthRouter } from './auth';
import { getApiUserRouter } from './user';

export const getRouter = async () => {
  const router = Router();

  router.use('/user', await getApiUserRouter());
  router.use('/auth', await getApiAuthRouter());

  return router;
};
