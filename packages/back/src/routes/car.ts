import { NextFunction, Request, Response, Router } from 'express';
import { Car } from 'src/models/Cars';
import { User } from 'src/models/User';
import { UserRole } from 'src/util/UserRole';

import { auth } from '../util/auth';

export const getApiCarRouter = () => {
  const router = Router();

  router.get('/', auth(UserRole.guest), async (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.user as User;
    try {
      const isMod = user && [UserRole.admin, UserRole.moderator].includes(user.role);
      const cars = await Car.findAll({ where: isMod ? {} : { verified: true } });
      res.json(cars);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', auth(), async (req: Request, res: Response, next: NextFunction) => {
    const { user, body } = req;

    try {
      await Car.create({
        ...body,
        verifierId: (user as User).id,
      });
      res.json({});
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

  router.get('/:id', auth(), async (req: Request, res: Response, next: NextFunction) => {
    try {
      const car = await Car.findByPk(+req.params.id);
      res.json(car);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
