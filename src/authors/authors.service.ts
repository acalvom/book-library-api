import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prisma.author.create({ data: createAuthorDto });
  }

  async findAll() {
    return await this.prisma.author.findMany();
  }

  async findById(id: number) {
    return await this.prisma.author.findUnique({ where: { id } });
  }

  async findByCode(code: string) {
    return await this.prisma.author.findUnique({ where: { code } });
  }

  async findByName(searchStr: string) {
    const searchQuery = searchStr
      ? {
          OR: [
            { code: { contains: searchStr } },
            { firstName: { contains: searchStr } },
            { lastName: { contains: searchStr } },
          ],
        }
      : {};
    return await this.prisma.author.findMany({ where: { ...searchQuery } });
  }
}
