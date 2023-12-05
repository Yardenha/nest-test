import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  create(createOrderDto: CreateOrderDto, user: User): Promise<Order> {
    const order = {
      id: `${Math.random()}`,
      books: createOrderDto.books,
      user,
    };
    this.orders.push(order);
    return Promise.resolve(order);
  }

  findAll(): Promise<Order[]> {
    return Promise.resolve(this.orders);
  }

  findOne(id: string) {
    const order = this.orders.find((order) => order.id === id);

    if (!order) {
      throw new HttpException(`order not found`, HttpStatus.NOT_FOUND);
    }

    return Promise.resolve(order);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
