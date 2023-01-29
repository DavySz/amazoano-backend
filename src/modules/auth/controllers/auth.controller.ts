import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IsPublic } from '../decorators/is-public.decorator';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { IAuthEmailAndPassword } from '../models/auth-email-password';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  authEmailPassword(@Request() request: IAuthEmailAndPassword) {
    return this.authService.authEmailPassword(request.user);
  }
}
