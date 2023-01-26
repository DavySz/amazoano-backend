import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateItemDTO } from '../dtos/create-item.dto';
import { WishlistsService } from '../services/wishlists.service';

@Controller('wishlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}
  @Get('find-all/:userId')
  findAll(@Param('userId') userId: string) {
    return this.wishlistsService.findAll(userId);
  }

  @Post('add/:userId')
  create(
    @Param('userId') userId: string,
    @Body() createItemDTO: CreateItemDTO,
  ) {
    return this.wishlistsService.create(userId, createItemDTO);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.wishlistsService.delete(id);
  }
}
