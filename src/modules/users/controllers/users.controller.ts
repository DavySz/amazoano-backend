import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { IsPublic } from 'src/modules/auth/decorators/is-public.decorator';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Post('create')
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.create(createUserDTO);
  }

  @Patch('update/:userId')
  update(
    @Param('userId') userId: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ) {
    return this.usersService.update(userId, updateUserDTO);
  }

  @Delete('delete/:userId')
  delete(@Param('userId') userId: string) {
    return this.usersService.delete(userId);
  }
}
