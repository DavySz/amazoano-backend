import { Module } from '@nestjs/common';
import { WishlistsController } from './controllers/wishlists.controller';
import { WishlistsService } from './services/wishlists.service';

@Module({
  controllers: [WishlistsController],
  providers: [WishlistsService],
})
export class WishlistsModule {}
