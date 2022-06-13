import { NextFunction, Request, Response, Router } from 'express';
import { UserRole } from 'src/util/UserRole';

import { auth } from '../util/auth';

export const getApiUserRouter = () => {
  const router = Router();

  router.get('/', auth(UserRole.guest), async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req;

    try {
      res.json(user);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
