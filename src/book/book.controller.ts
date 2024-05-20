import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBookDto } from './dto';

@Controller('book')
export class BookController {
  private books = [];

  @Get()
  getAllBooks() {
    return this.books;
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.books[+id];
  }

  @Post()
  createBook(@Body() book: CreateBookDto) {
    this.books.push(book);
    return this.books;
  }
}
