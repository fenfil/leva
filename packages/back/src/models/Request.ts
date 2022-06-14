import { INTEGER } from 'sequelize';
import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  underscored: true,
  freezeTableName: true,
  tableName: 'requests',
})
export class Request extends Model<Request, {}> {
  @AutoIncrement
  @PrimaryKey
  @Column(INTEGER.UNSIGNED)
  id: number;

  @Column
  name: string;

  @Column
  phone: string;
}
