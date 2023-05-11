import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'src/http';
import { AuthService } from './auth.service';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  public async login(@Req() req: Request) {
    return await this.authService.createToken(req.user);
  }
}
