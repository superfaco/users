import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserSaveNewDto } from '../dtos/user.save_new.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  saveNew(@Body() user: UserSaveNewDto) {
    return this.userService.saveNew(user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UserSaveNewDto) {
    return this.userService.update(id, user);
  }

  @Patch()
  updatePartial(@Body() user: Partial<UserSaveNewDto>) {
    return this.userService.updatePartial(user);
  }
}
