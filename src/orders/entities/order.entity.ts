import { Book } from 'src/books/entities/book.entity';
import { User } from 'src/users/entities/user.entity';

export class Order {
  id: string;
  user: User;
  books: Book[];
}
