import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersService } from 'src/modules/users/services/users.service';
import { AuthenticationByEmailAndPasswordDTO } from '../dtos/authenticationByEmailAndPassword.dto';
import { TValidateUserResponse } from '../interfaces/validate-user';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  private async validateUser({
    email,
    password,
  }: AuthenticationByEmailAndPasswordDTO): Promise<TValidateUserResponse> {
    const user = await this.usersService.findUserByEmail(email);
    const passwordMatch = await compare(password, user.password);

    if (!user || !passwordMatch) {
      throw new UnauthorizedException('email or password incorrect');
    }

    return {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        userId: user.userId,
        phone: user.phone,
        email: user.email,
      },
      accessToken: '',
    };
  }

  async authenticationByEmailAndPassword({
    email,
    password,
  }: AuthenticationByEmailAndPasswordDTO): Promise<TValidateUserResponse> {
    const userValidated = await this.validateUser({ email, password });
    return userValidated;
  }
}
