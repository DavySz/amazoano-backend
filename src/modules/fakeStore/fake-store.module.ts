import { Module } from '@nestjs/common';
import { FakeStoreController } from './controllers/fake-store.controller';
import { FakeStoreService } from './services/fake-store.service';

@Module({
  controllers: [FakeStoreController],
  providers: [FakeStoreService],
})
export class FakeStoreModule {}
