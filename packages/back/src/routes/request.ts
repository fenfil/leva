import { NextFunction, Request, Response, Router } from 'express';
import { Request as RequestModel } from 'src/models/Request';

export const getApiRequestRouter = () => {
  const router = Router();

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const { user, body } = req;

    try {
      await RequestModel.create(body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });
  return router;
};
