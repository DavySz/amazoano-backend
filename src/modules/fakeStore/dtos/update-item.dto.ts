import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDTO } from './create-cart.dto';

export class UpdateItemDTO extends PartialType(CreateCartDTO) {}
