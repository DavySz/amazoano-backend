import { Injectable } from '@nestjs/common';
import { wishlistsItem } from '../entities/wishlistsItem.entity';

@Injectable()
export class WishlistsService {
  private wishListsItems: wishlistsItem[] = [];

  findAllItemsByUser(id: string) {
    const items = this.wishListsItems.filter((item) => item.userId === id);
    return items;
  }

  addNewItem(wishlistItemDTO: any) {
    this.wishListsItems.push(wishlistItemDTO);
    return;
  }

  deleteItem(id: string) {
    const indexItem = this.wishListsItems.findIndex(
      (item) => item.id === Number(id),
    );
    this.wishListsItems.splice(indexItem, 1);
    return;
  }
}
