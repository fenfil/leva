import { config } from 'src/config';
import { Logger } from 'src/util/logger';

import { bootstrapDB } from './database';
import { bootstrapExpress } from './express';
import { bootstrapPassport } from './passport';

export const bootstrapMaster = async () => {
  await bootstrapDB();
  const { server } = await bootstrapExpress();
  await bootstrapPassport();

  await new Promise<void>((resolve) => {
    server.listen(config.port, () => {
      Logger.log(`Listening on port ${config.port}`);
      resolve();
    });
  });
};
