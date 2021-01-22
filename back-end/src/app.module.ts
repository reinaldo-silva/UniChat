import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import RepoModule from './repo.module';
import { AppService } from './app.service';

import ormOptions from './config/orm';
import UserResolver from './resolvers/user.resolver';
import MessageResolver from './resolvers/message.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { UsersNoSpecService } from './users--no-spec/users--no-spec.service';

const gqlImports = [UserResolver, MessageResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    RepoModule,
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
    UserModule,
    MessagesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersNoSpecService],
})
export class AppModule {}
