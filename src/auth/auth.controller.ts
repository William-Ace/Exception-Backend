import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async createUser(
    @Body() userData: CreateAuthDto
  ): Promise<HttpException | object> {
    let user;

    try {
      user = await this.authService.read(userData.email);
    } catch (error) {
      return new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        }
      );
    }

    if (user !== null) {
      return new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User Already Exist',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: Error('User already exists.'),
        }
      );
    }

    let newUser;
    try {
      newUser = await this.authService.create(userData);
      console.log('New user is registered...', newUser);
      return newUser;
    } catch (error) {
      return new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        }
      );
    }
  }
}
