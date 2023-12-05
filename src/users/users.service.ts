import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return createUserDto;
  }

  findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  findOne(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    if (!user) {
      throw new HttpException(`User not found`, HttpStatus.NOT_FOUND);
    }

    return Promise.resolve(user);
  }

  // update(email: string, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(email: string): Promise<User> {
    const index = this.users.findIndex((book) => book.email === email);

    if (index < 0) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const user = this.users.splice(index, 1)[1];

    return Promise.resolve(user);
  }
}
