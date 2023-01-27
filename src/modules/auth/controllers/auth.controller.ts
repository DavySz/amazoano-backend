import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationByEmailAndPasswordDTO } from '../dtos/authenticationByEmailAndPassword.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('email-password')
  authenticationByEmailAndPassword(
    @Body()
    { email, password }: AuthenticationByEmailAndPasswordDTO,
  ) {
    return this.authService.authenticationByEmailAndPassword({
      password,
      email,
    });
  }
}
