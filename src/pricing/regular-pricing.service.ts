import { Injectable } from '@nestjs/common';

@Injectable()
export class RegularPricingService {
  calculatePrice(prices: number[]): number {
    let sum = 0;
    prices.forEach((price) => (sum += price));
    return sum;
  }
}
