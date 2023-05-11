import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../util';
import { User } from './user.entity';
@Entity({
  database: 'gestorApi',
  name: 'photo',
})
export class PhotoUser extends BaseEntity {
  @OneToOne(() => User, (user) => user.photo)
  public user: User;

  @Column({
    nullable: true,
  })
  public filename: string;

  @Column({
    nullable: true,
  })
  public path: string;
}
