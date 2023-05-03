import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateUsersDto } from './create-users.dto';

export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
