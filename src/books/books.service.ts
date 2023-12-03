import { HttpException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  create(createBookDto: CreateBookDto) {
    this.books.push(createBookDto);
    return createBookDto;
  }

  findAll() {
    return this.books;
  }

  findOne(ISBN: string) {
    const book = this.books.find((book) => book.ISBN === ISBN);

    if (!book) {
      throw new HttpException(
        `Book with the following ${ISBN} ISBN doesn't exist`,
        404,
      );
    }
    return book;
  }

  update(ISBN: string, updateBookDto: UpdateBookDto) {
    return `This action updates a #${ISBN} book`;
  }

  remove(ISBN: string) {
    const index = this.books.findIndex((book) => book.ISBN === ISBN);

    const book = this.books.splice(index, 1);

    return book;
  }
}
