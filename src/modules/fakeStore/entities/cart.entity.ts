import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cart')
export class Cart {
  @PrimaryColumn()
  id: number;

  @Column()
  quantity: number;

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

  @Column()
  created_at: string;

  @Column({ nullable: true })
  updated_at: string;
}
