import { SequelizeOptions } from 'sequelize-typescript';

import { CookieSession } from './models/CookieSession';
import { User } from './models/User';

export const config = {
  port: process.env.PORT,
  whiteList: [process.env.UI_URL, '127.0.0.1', 'localhost'],
  database: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'mariadb',
    autoLoadModels: true,
    models: [User, CookieSession],
    sync: {
      force: true,
      alter: true,
    },
    // logging: (...a) => console.log(...a),
    logging: null,
  } as SequelizeOptions,
  session: {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secret: process.env.SESSION_SECRET || 'test_secret',
  },
  userPasswordSaltRounds: 10,
};
