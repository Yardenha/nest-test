import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    const dbUser = this.configService.get<string>('DATABASE_USER');
    console.log(dbUser);
    return this.booksService.findAll();
  }

  @Get(':ISBN')
  findOne(@Param('ISBN') ISBN: string) {
    return this.booksService.findOne(ISBN);
  }

  @Patch(':ISBN')
  update(@Param('ISBN') ISBN: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(ISBN, updateBookDto);
  }

  @Delete(':ISBN')
  remove(@Param('ISBN') ISBN: string) {
    return this.booksService.remove(ISBN);
  }
}
