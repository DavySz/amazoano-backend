import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IValidateUser } from '../interfaces/validate-user';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest<TUser = IValidateUser>(
    err: UnauthorizedException,
    user: TUser,
  ) {
    if (err || !user) {
      throw new UnauthorizedException(err.message);
    }
    return user;
  }
}
