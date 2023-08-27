import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, BooksModule, AuthorsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
