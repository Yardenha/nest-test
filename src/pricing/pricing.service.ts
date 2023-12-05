import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class PricingService {
  abstract calculatePrice(): number;
}
