import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import Message from './entities/message.entity';
import { MessagesGateway } from './messages.gateway';
import MessageResolver from './resolvers/message.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UsersModule],
  providers: [MessagesGateway, MessageResolver],
  exports: [MessageResolver],
})
export class MessagesModule {}
