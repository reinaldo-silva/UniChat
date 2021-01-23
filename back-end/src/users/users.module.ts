import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import HashProvider from './provider/hash.provider';
import User from './entities/user.entity';
import UserResolver from './resolvers/user.resolver';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, HashProvider],
  exports: [UserResolver],
})
export class UsersModule {}
