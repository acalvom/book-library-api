import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get('all/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.authorsService.findById(id);
  }

  @Get('all')
  findByCode(@Query('code') code: string) {
    return this.authorsService.findByCode(code);
  }

  @Get('search')
  findByName(@Query('name') searchStr?: string) {
    return this.authorsService.findByName(searchStr);
  }
}
