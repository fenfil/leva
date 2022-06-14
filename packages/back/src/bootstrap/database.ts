import { Sequelize } from 'sequelize-typescript';
import { config } from 'src/config';
import { Car } from 'src/models/Cars';
import { CookieSession } from 'src/models/CookieSession';
import { User } from 'src/models/User';
import { container } from 'src/util/container';

export const bootstrapDB = async () => {
  const sequelize = new Sequelize(config.database);
  User.sync({});
  CookieSession.sync({});
  Car.sync({});

  container.bind(Sequelize).toConstantValue(sequelize);

  await sequelize.authenticate();

  return sequelize;
};
