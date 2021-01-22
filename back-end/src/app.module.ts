import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import RepoModule from './repo.module';

import * as ormOptions from './config/orm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
