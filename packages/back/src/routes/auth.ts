import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';
import { CookieSession } from 'src/models/CookieSession';
import { User } from 'src/models/User';
import { Logger } from 'src/util/logger';
import { UserRole } from 'src/util/UserRole';

export const getApiAuthRouter = () => {
  const router = Router();

  router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', async (err: Error | null, user: User) => {
      try {
        if (err) {
          return next(err);
        }
        if (!user) {
          res.redirect('/');
          return;
        }

        await new Promise<void>((resolve, reject) => {
          // eslint-disable-next-line promise/prefer-await-to-callbacks
          req.logIn(user, async (err) => {
            try {
              if (err) {
                return reject(err);
              }

              return resolve();
            } catch (e) {
              return reject(e);
            }
          });
        });

        res.json({});
      } catch (error) {
        await Logger.error(error);
        next(error);
      }
    })(req, res, next);
  });

  router.get('/logout', async (req: Request, res: Response, next: NextFunction) => {
    (req.session as any).userId = null;
    (req.session as any).passport = {};
    await CookieSession.update({ userId: null }, { where: { sid: req.sessionID } });
    res.json({});
  });

  router.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
    const { name, password, email } = req.body;
    try {
      const passwordHash = await User.encryptPassword(password);

      const user = await User.create({
        name,
        passwordHash,
        email,
        avatar: 'tmpavatar',
        isConfirmed: false,
        role: UserRole.user,
      });

      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        return res.json({});
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
};
