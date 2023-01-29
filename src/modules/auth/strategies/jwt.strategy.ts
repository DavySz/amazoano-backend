import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IUserPayload } from 'src/modules/users/interfaces/user-payload';
import { IValidateJwtUser } from '../interfaces/validate-jwt-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: IUserPayload): Promise<IValidateJwtUser> {
    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
    };
  }
}
