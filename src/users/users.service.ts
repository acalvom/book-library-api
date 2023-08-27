import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findByEmail(email: string) {
    console.log('🚀 ~ UsersService ~ findByEmail ~ email:', email);

    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findByName(searchStr: string) {
    console.log('🚀 ~ UsersService ~ findByName ~ searchStr:', searchStr);

    const searchQuery = searchStr
      ? {
          OR: [
            { email: { contains: searchStr } },
            { firstName: { contains: searchStr } },
            { lastName: { contains: searchStr } },
          ],
        }
      : {};

    return await this.prisma.user.findMany({ where: { ...searchQuery } });
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { email },
      data: updateUserDto,
    });
  }

  async remove(email: string) {
    return await this.prisma.user.delete({ where: { email } });
  }
}
