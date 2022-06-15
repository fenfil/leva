import { NextFunction, Request, Response, Router } from 'express';
import { Model } from 'sequelize-typescript';
import { Car } from 'src/models/Cars';
import { Request as RequestModel } from 'src/models/Request';
import { User } from 'src/models/User';
import { ServerError } from 'src/util/ServerError';

export const getApiAllRouter = () => {
  const router = Router();

  router.post('/update-db', async (req: Request, res: Response, next: NextFunction) => {
    const { model, id, ...params } = req.body;
    const models: Record<string, Model> = {
      cars: Car as any,
      requests: RequestModel as any,
      users: User as any,
    };
    try {
      const modelToUpdate = models[model];
      if (!modelToUpdate) {
        throw new ServerError('Таблица не найдена', 422);
      }
      if (!id) {
        throw new ServerError('Id не найдена', 422);
      }
      await modelToUpdate.update(params, {
        where: {
          id,
        },
      });
      res.json({});
    } catch (error) {
      next(error);
    }
  });

  router.get('/all', async (req: Request, res: Response, next: NextFunction) => {
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
