import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';
import { RegularPricingService } from './pricing/regular-pricing.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, BooksModule, OrdersModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, RegularPricingService],
})
export class AppModule {}
