import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
})
export class UsersModule {}
