import { Request, Response, NextFunction } from 'express';
import { User } from './orm/entity/user.entity';

type RequestApi = Request & { user: User };

export { RequestApi as Request, Response, NextFunction };
