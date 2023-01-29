import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { IUserPayload } from 'src/modules/users/interfaces/user-payload';
import { UsersService } from 'src/modules/users/services/users.service';
import { IAuthEmailPasswordDTO } from '../dtos/auth-email-password.dto';
import { IAuthEmailAndPassword } from '../interfaces/auth-email-password';
import { IValidateUser } from '../interfaces/validate-user';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<IValidateUser> {
    const user = await this.usersService.findByEmail(email);
    const passwordMatch = await compare(password, user.password);

    if (!user || !passwordMatch) {
      throw new UnauthorizedException(
        'Email address or password provided is incorrect.',
      );
    }

    return {
      first_name: user.first_name,
      last_name: user.last_name,
      userId: user.userId,
      phone: user.phone,
      email: user.email,
    };
  }

  async authEmailPassword(
    userDTO: IAuthEmailPasswordDTO,
  ): Promise<IAuthEmailAndPassword> {
    const payload: IUserPayload = {
      sub: userDTO.userId,
      email: userDTO.email,
      name: userDTO.first_name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
      user: {
        ...userDTO,
      },
    };
  }
}
