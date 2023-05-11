import { IsOptional, IsUUID } from 'class-validator';
import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

abstract class Base extends BaseEntity {
  @IsOptional()
  @IsUUID('4')
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ type: 'timestamp' })
  public created: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updated: Date;
}
export { Base as BaseEntity };
