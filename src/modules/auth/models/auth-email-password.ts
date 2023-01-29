import { Request } from 'express';

export interface IAuthEmailAndPassword extends Request {
  user: {
    first_name: string;
    last_name: string;
    userId: string;
    phone: string;
    email: string;
  };
}
