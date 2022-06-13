import connectSequelizeStore from 'connect-session-sequelize';
import expressSession, { CookieOptions } from 'express-session';
import { Sequelize } from 'sequelize-typescript';
import { config } from 'src/config';
import { CookieSession } from 'src/models/CookieSession';

import { container } from './container';

const SequelizeStore = connectSequelizeStore(expressSession.Store);

export const session = () => {
  const cookie: CookieOptions = {
    maxAge: config.session.maxAge,
    httpOnly: true,
    signed: true,
  };

  return expressSession({
    secret: config.session.secret,
    cookie,
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: container.get(Sequelize),
      table: new CookieSession({}).constructor.name,
      checkExpirationInterval: config.session.maxAge / 3,
      expiration: config.session.maxAge,
      extendDefaultFields: (defaults, userSession) => ({
        ...defaults,
        userId: userSession && userSession.passport && userSession.passport.user,
      }),
    }),
  });
};
