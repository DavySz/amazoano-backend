import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './controllers/cart.controller';
import { ProductsController } from './controllers/products.controller';
import { Cart } from './entities/cart.entity';
import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductsController, CartController],
  providers: [ProductsService, CartService],
  imports: [TypeOrmModule.forFeature([Cart])],
})
export class FakeStoreModule {}
