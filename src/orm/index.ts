import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User, PhotoUser } from './entity/index';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
const ormconfig_admin = {
  type: process.env.ORMCONFIG_TYPE,
  host: process.env.ORMCONFIG_HOST,
  port: parseInt(process.env.ORMCONFIG_PORT),
  username: process.env.ORMCONFIG_USERNAME,
  password: process.env.ORMCONFIG_PASSWORD,
  database: process.env.ORMCONFIG_DATABASE_ADMIN,
  synchronize: true,
} as TypeOrmModuleOptions;
const entities_admin = [User, PhotoUser];

@Global()
@Module({})
export class OrmAdminModule {
  static forRoot(): DynamicModule {
    return {
      module: OrmAdminModule,
      imports: [
        TypeOrmModule.forRoot({
          ...ormconfig_admin,
          entities: entities_admin,
        }),
      ],
      exports: [TypeOrmModule],
    };
  }
}
