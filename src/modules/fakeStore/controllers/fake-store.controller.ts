import { Controller, Get, Param } from '@nestjs/common';
import { FakeStoreService } from '../services/fake-store.service';

@Controller('products')
export class FakeStoreController {
  constructor(private readonly fakeStoreService: FakeStoreService) {}

  @Get('find-all')
  getAllProducts() {
    return this.fakeStoreService.getAllProducts();
  }

  @Get('categories')
  getAllCategories() {
    return this.fakeStoreService.getAllCategories();
  }

  @Get('category/:category')
  getByCategory(@Param('category') category: string) {
    return this.fakeStoreService.getByCategory(category);
  }
}
