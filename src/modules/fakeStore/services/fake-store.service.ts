import { Injectable } from '@nestjs/common';
import { fakeStoreApi } from 'src/config/fake-store.axios';
import { ICategories } from '../interfaces/categories';
import { IProduct } from '../interfaces/product';

@Injectable()
export class FakeStoreService {
  async getAllProducts(): Promise<IProduct[]> {
    const response = await fakeStoreApi.get(`/products`);
    return response.data;
  }
  async getAllCategories(): Promise<ICategories> {
    const response = await fakeStoreApi.get(`/products/categories`);
    return response.data;
  }
  async getByCategory(category: string): Promise<IProduct[]> {
    const response = await fakeStoreApi.get(`/products/category/${category}`);
    return response.data;
  }
}
