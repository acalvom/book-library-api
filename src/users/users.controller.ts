import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get('all')
  async findByEmail(@Query('email') email: string) {
    return new UserEntity(await this.usersService.findByEmail(email));
  }

  @Get('search')
  async findByName(@Query('name') searchStr?: string) {
    const users = await this.usersService.findByName(searchStr);
    return users.map((user) => new UserEntity(user));
  }

  @Patch(':email')
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return new UserEntity(await this.usersService.update(email, updateUserDto));
  }

  @Delete(':email')
  async remove(@Param('email') email: string) {
    return new UserEntity(await this.usersService.remove(email));
  }
}
