import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

//Seguir os passos do link tutorial

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'unichat',
  database: 'unichat',
  entities: [
    path.resolve(__dirname, '..', '**', 'entities', '*.entity.{js,ts}'),
  ],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

export default options;
