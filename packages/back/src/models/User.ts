import * as bcrypt from 'bcrypt';
import { ENUM, INTEGER } from 'sequelize';
import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { config } from 'src/config';
import { UserRole } from 'src/util/UserRole';

import { Car } from './Cars';

@Table({
  underscored: true,
  freezeTableName: true,
  tableName: 'users',
})
export class User extends Model<User, {}> {
  // columns
  @AutoIncrement
  @PrimaryKey
  @Column(INTEGER.UNSIGNED)
  id: number;

  @Column
  name: string;

  @Unique
  @Column
  email: string;

  @Column
  passwordHash: string;

  @Column(ENUM(UserRole.bot, UserRole.user, UserRole.moderator, UserRole.admin))
  role: UserRole;

  // custom methods
  async verifyPassword(password: string): Promise<boolean> {
    const result = await bcrypt.compare(password, this.passwordHash);

    return result;
  }

  static async encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, config.userPasswordSaltRounds);
  }

  @HasMany(() => Car)
  cars: Car;
}
