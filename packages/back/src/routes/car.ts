import { NextFunction, Request, Response, Router } from 'express';
import { Car } from 'src/models/Cars';
import { User } from 'src/models/User';
import { UserRole } from 'src/util/UserRole';

import { auth } from '../util/auth';

export const getApiCarRouter = () => {
  const router = Router();

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await Car.findAll({ where: { verified: true } });
      res.json(cars);
    } catch (error) {
      next(error);
    }
  });

  router.post('/verify', auth(UserRole.moderator), async (req: Request, res: Response, next: NextFunction) => {
    const {
      user,
      body: { carId },
    } = req;

    try {
      const car = await Car.findByPk(+carId);
      await car.update({
        verified: true,
        verifierId: (user as User).id,
      });
      res.json({});
    } catch (error) {
      next(error);
    }
  });

  return router;
};
