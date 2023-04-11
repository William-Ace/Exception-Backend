import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Auth } from './schemas/auth.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly authModel: Model<Auth>
  ) {}

  async create(createAuthDto: CreateAuthDto): Promise<Auth> {
    const createdAuth = new this.authModel(createAuthDto);
    return createdAuth.save();
  }

  async read(email: string): Promise<Auth> {
    return this.authModel.findOne({ email }).exec();
  }
}
