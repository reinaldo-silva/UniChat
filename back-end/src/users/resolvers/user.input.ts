import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly ra: string;

  @Field()
  readonly password: string;
}

@InputType()
export class DeleteUser {
  @Field()
  readonly ra: string;
}
