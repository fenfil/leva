import { NextFunction, Request } from 'express';
import { User } from 'src/models/User';

import { ServerError } from './ServerError';
import { UserRole } from './UserRole';

const levelsHierarcy = [UserRole.admin, UserRole.moderator, UserRole.user, UserRole.bot, UserRole.guest];

const authorize = async (user: User, requiredRole: UserRole = UserRole.bot) => {
  const userIndex = levelsHierarcy.indexOf(user?.role || UserRole.guest);
  const requiredIndex = levelsHierarcy.indexOf(requiredRole);

  if (userIndex <= requiredIndex) {
    return;
  }

  throw new ServerError('Not authorized', 401);
};

/**
 * attach user to req and auth him
 */
export const auth =
  (requiredRole: UserRole = UserRole.bot) =>
  async (req: Request, res, next: NextFunction) => {
    try {
      await authorize(req.user as any, requiredRole);
      next();
    } catch (error) {
      next(error);
    }
  };
