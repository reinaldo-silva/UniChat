import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormOptions from './config/orm';
import UserResolver from './users/resolvers/user.resolver';
import MessageResolver from './messages/resolvers/message.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';

const gqlImports = [UserResolver, MessageResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
    MessagesModule,
    UsersModule,
  ],
})
export class AppModule {}
