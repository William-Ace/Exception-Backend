import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body('user') userData: CreateAuthDto): Promise<boolean> {
    const alreadyExist = this.authService.read(userData.email) === null;
    if (alreadyExist) return false;
    this.authService
      .create(userData)
      .then((newUser) => {
        console.log('New user is registered...', newUser);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }
}
