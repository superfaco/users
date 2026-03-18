import { Injectable } from '@nestjs/common';
import { UserSaveNewDto } from '../dtos/user.save_new.dto';

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name: 'Michael',
      email: 'michael@example.com',
    },
  ];
  constructor() {}

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id == id);
  }

  saveNew(user: UserSaveNewDto) {
    user.id =
      this.users.reduce((prev, curr) => {
        if (curr.id > prev) {
          return curr.id;
        }
        return prev;
      }, -1) + 1;
    this.users.push(user);
    return user;
  }
}
