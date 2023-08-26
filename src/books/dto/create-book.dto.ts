import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  genre: string;

  @IsInt()
  @IsNotEmpty()
  pages: number;

  @IsString()
  @IsOptional()
  cover?: string;

  @IsOptional()
  @MaxLength(300)
  synopsis?: string;

  @IsInt()
  @IsNotEmpty()
  year: number;

  @IsInt()
  @IsNotEmpty()
  authorId: number;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  isRead?: boolean = false;
}
