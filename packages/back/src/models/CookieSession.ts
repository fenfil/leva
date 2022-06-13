import { BelongsToGetAssociationMixin, INTEGER, TEXT } from 'sequelize';
import { BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

import { User } from './User';

@Table({
  underscored: true,
  freezeTableName: true,
  tableName: 'cookie_sessions',
})
export class CookieSession extends Model<CookieSession, {}> {
  @PrimaryKey
  @Column
  sid: string;

  @Column
  expires: Date;

  @Column(TEXT)
  data: string;

  @ForeignKey(() => User)
  @Column(INTEGER.UNSIGNED)
  userId: number;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @BelongsTo(() => User)
  user: User;

  getUser: BelongsToGetAssociationMixin<User>;
}
