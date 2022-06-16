import { FLOAT, INTEGER } from 'sequelize';
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
  vin: string;

  @Column
  name: string;

  @Column(INTEGER.UNSIGNED)
  year: number;

  @Column(FLOAT)
  mileage: number;

  @Column
  color: string;

  @Column
  verified: boolean;

  @ForeignKey(() => User)
  verifierId: number;

  @BelongsTo(() => User)
  verifier: User;
}
