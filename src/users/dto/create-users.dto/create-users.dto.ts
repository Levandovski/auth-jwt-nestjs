import { IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
