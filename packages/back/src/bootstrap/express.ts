import http from 'http';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { RequestHandler } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import { config } from 'src/config';
import { getRouter } from 'src/routes';
import { errorHandler } from 'src/util/errorHandler';
import { session } from 'src/util/session';

export const bootstrapExpress = async () => {
  const app = express();
  const server = http.createServer(app);
  app.use(
    cors({
      origin: config.whiteList,
      credentials: true,
    }),
  );
  app.use(morgan(':date :method :url :status :res[content-length] - :total-time ms'));

  app.use(helmet() as RequestHandler);
  app.use(cookieParser());
  app.use(session());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(compression());
  app.use(express.json() as RequestHandler);
  app.use(express.urlencoded({ extended: true }) as RequestHandler);
  app.use(await getRouter());
  app.use(errorHandler);
  return { server };
};
