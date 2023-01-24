import { Module } from '@nestjs/common';
import { WishlistsModule } from './modules/wishlists/wishlists.module';

@Module({
  imports: [WishlistsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
