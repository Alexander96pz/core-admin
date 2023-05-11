import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'src/http';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    if (req.body.username || req.body.password) {
      return res.json({ error: 'u26' });
    }
    console.log(req.body.username + ' fd ' + req.body.password);
  }
}
