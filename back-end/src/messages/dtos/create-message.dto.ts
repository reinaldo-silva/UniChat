import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMessageDTO {
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  content: string;
}
