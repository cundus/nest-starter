import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';
import { Book } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.prisma.book.create({ data: createBookDto });
  }

  async findAll(): Promise<Book[] | []> {
    return await this.prisma.book.findMany();
  }

  async findOne(id: string): Promise<Book> {
    return await this.prisma.book.findFirst({ where: { ID: id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
