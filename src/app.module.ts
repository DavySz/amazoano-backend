import { Module } from '@nestjs/common';
import { WishlistsModule } from './modules/wishlists/wishlists.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WishlistsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: String(process.env.DATABASE_PASSWORD),
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
