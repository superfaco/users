import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserSaveNewDto } from '../dtos/user.save_new.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Equal, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userEntityRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userEntityRepository.findOne({
      where: {
        id: Equal(Number.parseInt(id)),
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async saveNew(user: UserSaveNewDto) {
    let newUser = new UserEntity();
    newUser.id = user.id;
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.picture = user.picture;
    newUser.dateOfBirth = user.dateOfBirth;
    newUser = await this.userEntityRepository.save(newUser);
    return newUser;
  }

  async remove(id: string) {
    const user = await this.userEntityRepository.findOne({
      where: {
        id: Equal(Number.parseInt(id)),
      },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await this.userEntityRepository.remove(user);
    return user;
  }

  async update(id: string, user: UserSaveNewDto) {
    let userInDB = await this.userEntityRepository.findOne({
      where: {
        id: Equal(Number.parseInt(id)),
      },
    });
    if (!userInDB) {
      userInDB = new UserEntity();
      userInDB.name = user.name;
      userInDB.email = user.email;
      userInDB = await this.userEntityRepository.save(userInDB);
    } else {
      userInDB.name = user.name;
      userInDB.email = user.email;
      userInDB = await this.userEntityRepository.save(userInDB);
    }
    return userInDB;
  }

  async updatePartial(user: Partial<UserSaveNewDto>) {
    if (!user.id) {
      throw new BadRequestException('Missing id');
    }
    let userInDB = await this.userEntityRepository.findOne({
      where: {
        id: Equal(user.id),
      },
    });
    if (!userInDB) {
      throw new NotFoundException('User does not exist');
    }
    if (user.name !== undefined) {
      userInDB.name = user.name;
    }
    if (user.email !== undefined) {
      userInDB.email = user.email;
    }
    userInDB = await this.userEntityRepository.save(userInDB);
    return userInDB;
  }
}
