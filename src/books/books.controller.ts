import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.create(createBookDto);
  }

  @Get()
  async findAll() {
    return await this.booksService.findAll();
  }

  @Get('read')
  async findRead() {
    return await this.booksService.findRead();
  }

  @Get(':isbn')
  async findByIsbn(@Param('isbn') isbn: string) {
    const book = await this.booksService.findByIsbn(isbn);
    if (!book) {
      throw new NotFoundException(`Book with ${isbn} does not exist.`);
    }
    return book;
  }

  @Patch(':isbn')
  async update(
    @Param('isbn') isbn: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const book = await this.booksService.update(isbn, updateBookDto);
    if (!book) {
      throw new NotFoundException(`Book with ${isbn} does not exist.`);
    }
    return book;
  }

  @Delete(':isbn')
  async remove(@Param('isbn') isbn: string) {
    const book = await this.booksService.remove(isbn);
    if (!book) {
      throw new NotFoundException(`Book with ${isbn} does not exist.`);
    }
    return book;
  }
}
