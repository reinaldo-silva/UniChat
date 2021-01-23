import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

//Seguir os passos do link tutorial

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/uniChat.db',
  logging: true,
  entities: [
    path.resolve(__dirname, '..', '**', 'entities', '*.entity.{js,ts}'),
  ],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

export default options;
