import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({ data: createBookDto });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findByIsbn(isbn: string) {
    return this.prisma.book.findUnique({ where: { isbn } });
  }

  update(isbn: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({ where: { isbn }, data: updateBookDto });
  }

  remove(isbn: string) {
    return this.prisma.book.delete({ where: { isbn } });
  }
}
