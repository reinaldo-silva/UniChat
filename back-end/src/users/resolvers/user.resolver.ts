import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../entities/user.entity';
import HashProvider from '../provider/hash.provider';
import { UserInput, UserLogin } from './user.input';

@Resolver(() => User)
@Injectable()
export default class UserResolver {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly hashProvider: HashProvider,
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
  public async createUser(@Args('data') input: UserInput): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { ra: input.ra.toLowerCase().trim() },
    });

    if (user) {
      throw new BadRequestException('Uses already exists');
    }
    const hash = await this.hashProvider.hash(input.password.trim());

    const createdUser = this.userRepository.create({
      ra: input.ra.toLowerCase().trim(),
      password: hash,
    });

    await this.userRepository.save(createdUser);
    return createdUser;
  }

  @Query(() => User, { nullable: true })
  public async loginUser(@Args('data') input: UserLogin): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { ra: input.ra.toLowerCase().trim() },
    });

    if (!user) {
      throw new NotFoundException('Incorrect login or password!');
    }
    const compare = await this.hashProvider.compare(
      input.password,
      user.password,
    );

    if (!compare) throw new BadRequestException('Incorrect login or password!');

    return user;
  }
}
