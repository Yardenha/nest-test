import { IsISBN, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsISBN()
  ISBN: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
