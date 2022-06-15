import { NextFunction, Request, Response, Router } from 'express';
import { Car } from 'src/models/Cars';
import { Request as RequestModel } from 'src/models/Request';
import { User } from 'src/models/User';

export const getApiAllRouter = () => {
  const router = Router();

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        cars: await Car.findAll(),
        users: await User.findAll(),
        requests: await RequestModel.findAll(),
      });
    } catch (error) {
      next(error);
    }
  });
  return router;
};
