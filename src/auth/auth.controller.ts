import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(@Body() userData: CreateAuthDto): Promise<boolean> {
    let alreadyExist;

    try {
      alreadyExist = await this.authService.read(userData.email);
    } catch (err) {
      console.log(err);
      return false;
    }
    if (alreadyExist !== null) return false;

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
