import passport from 'passport';
import passportLocal from 'passport-local';
import { User } from 'src/models/User';
import { ServerError } from 'src/util/ServerError';

export const bootstrapPassport = () => {
  passport.use(
    new passportLocal.Strategy(
      {
        usernameField: 'name',
        passwordField: 'password',
      },
      async (nameOrEmail, password, done) => {
        try {
          const user = await User.findOne({
            where: { name: nameOrEmail },
          });

          if (!user) {
            return done(new ServerError(`Неправильный логин`, 422), false, {
              message: `Неправильный логин`,
            });
          }
          const isCorrect = await user.verifyPassword(password);
          if (!isCorrect) {
            return done(new ServerError('Неправильный пароль', 422), false, {
              message: 'Неправильный пароль',
            });
          }
          done(null, user);
        } catch (error) {
          done(error);
        }
      },
    ),
  );
  passport.serializeUser((user: User, done) => {
    try {
      done(null, user.id);
    } catch (error) {
      done(error);
    }
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};
