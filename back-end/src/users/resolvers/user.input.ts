import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly ra: string;

  @Field()
  readonly password: string;
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
