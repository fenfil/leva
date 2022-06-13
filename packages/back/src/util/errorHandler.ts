import { NextFunction, Request, Response } from 'express';
import { Result } from 'express-validator';
import { ValidationError as SequelizeValidationError } from 'sequelize';

import { Logger } from './logger';
import { ServerError } from './ServerError';

const logger = new Logger('errorHandler');

export const errorHandler = async (error: Error, req: Request, res: Response, next: NextFunction) => {
  try {
    if (error instanceof SequelizeValidationError) {
      res.status(400);
      return res.json({
        errors: error.errors.map((err) => err.message),
      });
    }

    if (error instanceof ServerError) {
      if (error.critical) {
        logger.error(error);
        return res.status(500).json({
          error: 'Internal Server Error',
        });
      }
      return res.status(error.status).json({
        error: error.message,
      });
    }

    if ((error as any as Result).mapped) {
      // express-validator error
      const err = (error as any as Result).array()[0];
      return res.status(422).json({
        error: err.msg,
        field: err.param,
      });
    }

    if (typeof error === 'string') {
      return res.status(422).json({
        error,
      });
    }

    logger.error(error);

    res.status(500).json({
      error: 'Internal Server Error',
    });
  } catch (err) {
    logger.error("Can't send response", err);
  }
};
