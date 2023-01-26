import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDTO } from '../dtos/create-item.dto';
import { Wishlist } from '../entities/wishlist.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: Repository<Wishlist>,
  ) {}

  findAll(userId: string) {
    return this.wishlistRepository.findBy({ userId: userId });
  }

  create(userId: string, createItemDTO: CreateItemDTO) {
    const assignedObject = Object.assign(createItemDTO, { userId: userId });

    const newItem = this.wishlistRepository.create(assignedObject);

    return this.wishlistRepository.save(newItem);
  }

  async delete(itemId: string) {
    const item = await this.wishlistRepository.findBy({ id: Number(itemId) });
    if (!item) {
      throw new NotFoundException(`Item with ID ${itemId} not found`);
    }
    return this.wishlistRepository.remove(item);
  }
}
