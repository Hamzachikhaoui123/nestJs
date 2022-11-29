import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from 'src/dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import {RegisterDTO} from './../dto/register.dto'
 @Controller('auth')
export class AuthController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
        
      ) {}

    @Post('register')
    async register(@Body() RegisterDTO: RegisterDTO) {
      const user = await this.userService.create(RegisterDTO);
      const payload = {
      
        email: user.email,
      };
  
      const token = await this.authService.signPayload(payload);
      return { user, token };
    }
    @Post('login')
    async login(@Body() UserDTO: LoginDTO) {
      const user = await this.userService.findByLogin(UserDTO);
      const payload = {
        email: user.email,
      };
      const token = await this.authService.signPayload(payload);
      return { user, token};
    }

}
