import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class UserInput {
  @Field()
  readonly ra: string;

  @Field()
  readonly password: string;
}
