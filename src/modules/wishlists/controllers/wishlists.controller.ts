import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WishlistsService } from '../services/wishlists.service';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}
  @Get('find-all/:id')
  findAllItemsByUser(@Param('id') id: string) {
    return this.wishlistsService.findAllItemsByUser(id);
  }

  @Post('add')
  addNewItem(@Body() body) {
    return this.wishlistsService.addNewItem(body);
  }

  @Delete('delete/:id')
  deleteItem(@Param('id') id: string) {
    return this.wishlistsService.deleteItem(id);
  }
}
