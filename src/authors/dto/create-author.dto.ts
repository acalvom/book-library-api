import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  firstName: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  lastName?: string;
}
