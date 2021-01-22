import { Injectable } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { PubSub } from 'graphql-subscriptions';
import UserResolver from 'src/users/resolvers/user.resolver';
import { Repository } from 'typeorm';
import User from '../../users/entities/user.entity';
import Message from '../entities/message.entity';
import MessageInput, { DeleteMessageInput } from './message.input';

export const pubSub = new PubSub();

@Resolver(() => Message)
@Injectable()
export default class MessageResolver {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly userResolver: UserResolver,
  ) {}

  @Query(() => [Message])
  public async getMessages(): Promise<Message[]> {
    return this.messageRepository.find();
  }
  @Query(() => [Message], { nullable: true })
  public async getMessageFromUser(
    @Args('userId') userId: number,
  ): Promise<Message[]> {
    return this.messageRepository.find({
      where: { userId },
    });
  }

  @Query(() => Message, { nullable: true })
  public async getMessage(@Args('id') id: number): Promise<Message> {
    return this.messageRepository.findOne(id);
  }

  @Mutation(() => Message)
  public async createMessage(
    @Args('data') input: MessageInput,
  ): Promise<Message> {
    const message = this.messageRepository.create({
      userId: input.userId,
      content: input.content,
    });

    const response = await this.messageRepository.save(message);

    pubSub.publish('messageAdded', {
      messageAdded: message,
    });

    return response;
  }

  @Mutation(() => Message, { nullable: true })
  public async deleteMessage(
    @Args('data') input: DeleteMessageInput,
  ): Promise<Message> {
    const message = await this.messageRepository.findOne(input.id);

    if (!message || message.userId !== input.userId)
      throw new Error(
        'Message does not exist or you are not the message author',
      );

    const copy = { ...message };

    await this.messageRepository.remove(message);

    return copy;
  }

  @Subscription(() => Message)
  messageAdded() {
    return pubSub.asyncIterator('messageAdded');
  }

  @ResolveField(() => User, { name: 'user' })
  public async getUser(@Parent() parent: Message): Promise<User> {
    return this.userResolver.getUser(parent.userId);
  }
}
