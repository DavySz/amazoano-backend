import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartDTO } from '../dtos/create-cart.dto';
import { UpdateItemDTO } from '../dtos/update-item.dto';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
  ) {}

  getAll(userId: string) {
    return this.cartRepository.findBy({ userId });
  }

  create(userId: string, product: CreateCartDTO) {
    const productCreated = this.cartRepository.create({
      ...product,
      userId,
      created_at: new Date().toISOString(),
    });
    return this.cartRepository.save(productCreated);
  }

  async update(id: string, updateItemDTO: UpdateItemDTO) {
    const item = await this.cartRepository.preload({
      ...updateItemDTO,
      id: Number(id),
      updated_at: new Date().toISOString(),
    });

    return this.cartRepository.save(item);
  }

  async delete(id: string) {
    const item = await this.cartRepository.findBy({ id: Number(id) });
    if (!item) {
      throw new NotFoundException(`Item ID ${id} not found`);
    }

    return this.cartRepository.remove(item);
  }
}
