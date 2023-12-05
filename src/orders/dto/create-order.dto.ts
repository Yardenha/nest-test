import { IsEmail, IsNotEmpty } from 'class-validator';
import { Book } from 'src/books/entities/book.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  books: Book[];
}
