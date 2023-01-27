import { IsString } from 'class-validator';

export class AuthenticationByEmailAndPasswordDTO {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
