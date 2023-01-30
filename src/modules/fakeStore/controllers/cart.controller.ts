import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCartDTO } from '../dtos/create-cart.dto';
import { UpdateItemDTO } from '../dtos/update-item.dto';
import { CartService } from '../services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
  @Get('find-all/:userId')
  getAll(@Param('userId') userId: string) {
    return this.cartService.getAll(userId);
  }

  @Post('create/:userId')
  create(@Param('userId') userId: string, @Body() product: CreateCartDTO) {
    return this.cartService.create(userId, product);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() product: UpdateItemDTO) {
    return this.cartService.update(id, product);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.cartService.delete(id);
  }
}
