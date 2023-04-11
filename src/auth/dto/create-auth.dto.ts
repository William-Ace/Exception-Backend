// DTO : Data Transfer Object
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @AutoMap()
  @IsNotEmpty()
  readonly password: string;
}
