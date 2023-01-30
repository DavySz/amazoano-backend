import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('find-all')
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get('categories')
  getAllCategories() {
    return this.productsService.getAllCategories();
  }

  @Get('category/:category')
  getByCategory(@Param('category') category: string) {
    return this.productsService.getByCategory(category);
  }
}
