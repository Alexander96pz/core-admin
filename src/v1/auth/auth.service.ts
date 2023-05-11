import { Injectable } from '@nestjs/common';
import { User } from 'src/orm/entity/user.entity';

@Injectable()
export class AuthService {
  public async createToken(user: User) {}
}
