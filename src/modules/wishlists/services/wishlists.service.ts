import { Injectable } from '@nestjs/common';
import { CreateItemDTO } from '../dtos/create-item.dto';
import { wishlistsItem } from '../entities/wishlistsItem.entity';

@Injectable()
export class WishlistsService {
  private wishListsItems: wishlistsItem[] = [];

  find(userId: string) {
    const items = this.wishListsItems.filter((item) => item.userId === userId);
    return items;
  }

  create(userId: string, createItemDTO: CreateItemDTO) {
    const newItem = Object.assign(createItemDTO, { userId: userId });
    this.wishListsItems.push(newItem);
    return;
  }

  delete(itemId: string) {
    const indexItem = this.wishListsItems.findIndex(
      (item) => item.id === Number(itemId),
    );

    if (indexItem >= 0) {
      this.wishListsItems.splice(indexItem, 1);
      return;
    }

    return;
  }
}
