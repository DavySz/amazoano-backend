import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wishlist')
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('float')
  price: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  image: string;

  @Column('json')
  rating: {
    rate: number;
    count: number;
  };

  @Column()
  userId: string;
}
