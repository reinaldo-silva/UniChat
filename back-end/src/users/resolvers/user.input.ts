import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field()
  readonly ra: string;

  @Field()
  readonly password: string;

  @Field()
  readonly name: string;
}

@InputType()
export class UserDelete {
  @Field()
  readonly ra: string;
}

@InputType()
export class UserLogin {
  @Field()
  readonly ra: string;

  @Field()
  readonly password: string;
}
