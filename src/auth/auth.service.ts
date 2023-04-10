import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Auth } from './interfaces/auth.interface';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_MODEL')
    private authModel: Model<Auth>
  ) {}

  async create(createAuthDto: CreateAuthDto): Promise<Auth> {
    const createdAuth = new this.authModel(createAuthDto);
    return createdAuth.save();
  }

  async read(email: string): Promise<Auth> {
    return this.authModel.findOne({ email }).exec();
  }
}
