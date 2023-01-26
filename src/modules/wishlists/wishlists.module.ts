import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistsController } from './controllers/wishlists.controller';
import { Wishlist } from './entities/wishlist.entity';
import { WishlistsService } from './services/wishlists.service';

@Module({
  controllers: [WishlistsController],
  providers: [WishlistsService],
  imports: [TypeOrmModule.forFeature([Wishlist])],
})
export class WishlistsModule {}
