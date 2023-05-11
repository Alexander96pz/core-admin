import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { IUser, UserRole } from '../interface/user.interface';
import { BaseEntity } from '../util';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { PhotoUser } from './photo.entity';

@Entity({
  database: 'gestorApi',
  name: 'user',
})
export class User extends BaseEntity implements IUser {
  constructor() {
    super();
  }

  @IsOptional()
  @Column({
    nullable: true,
    unique: true,
  })
  public username: string;

  @IsOptional()
  @IsEmail({}, { always: true, message: 'u1' })
  @Column({
    nullable: true,
  })
  public email: string;

  @IsOptional()
  @IsString({ always: true, message: 'u2' })
  @Column({
    nullable: true,
  })
  public telephone: string;

  @IsOptional()
  @IsString({ always: true, message: 'u4' })
  @MinLength(8, { message: 'u5' })
  @Column({
    nullable: false,
  })
  public password: string;

  @IsOptional()
  @IsString({ always: true, message: 'u6' })
  @Column({
    nullable: false,
  })
  public firstname: string;

  @IsOptional()
  @IsString({ always: true, message: 'u7' })
  @Column({
    nullable: false,
  })
  public lastname: string;

  @IsOptional()
  @IsNotEmpty({ message: 'u8' })
  @IsEnum(UserRole, { message: 'u9' })
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  public role: UserRole;

  @Column({
    nullable: true,
  })
  public lastLogin: Date;

  @OneToOne(() => PhotoUser, (photo) => photo.user, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public photo: PhotoUser;
}
