import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}
  
    async signPayload(payload) {
      return sign(payload, "12323ha", { expiresIn: '7d' });
    }
}
