import { Injectable } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../entities/user.entity';
import { UserInput } from './user.input';

@Resolver(() => User)
@Injectable()
export default class UserResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  @Mutation(() => User)
  public async createOrLoginUser(
    @Args('data') input: UserInput,
  ): Promise<User> {
    let user = await this.userRepository.findOne({
      where: { ra: input.ra.toLowerCase().trim() },
    });

    if (!user) {
      user = this.userRepository.create({
        ra: input.ra.toLowerCase().trim(),
        password: input.password.trim(),
      });

      await this.userRepository.save(user);
    }

    return user;
  }
}
