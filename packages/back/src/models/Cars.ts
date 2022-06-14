import { INTEGER } from 'sequelize';
import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';

import { User } from './User';

@Table({
  underscored: true,
  freezeTableName: true,
  tableName: 'cars',
})
export class Car extends Model<Car, {}> {
  // columns
  @AutoIncrement
  @PrimaryKey
  @Column(INTEGER.UNSIGNED)
  id: number;

  @Column
  name: string;

  @Column
  verified: boolean;

  @ForeignKey(() => User)
  verifierId: number;

  @BelongsTo(() => User)
  verifier: User;
}
