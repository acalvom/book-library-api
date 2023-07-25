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

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get('read')
  findRead() {
    return this.booksService.findRead();
  }

  @Get(':isbn')
  findByIsbn(@Param('isbn') isbn: string) {
    return this.booksService.findByIsbn(isbn);
  }

  @Patch(':isbn')
  update(@Param('isbn') isbn: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(isbn, updateBookDto);
  }

  @Delete(':isbn')
  remove(@Param('isbn') isbn: string) {
    return this.booksService.remove(isbn);
  }
}
