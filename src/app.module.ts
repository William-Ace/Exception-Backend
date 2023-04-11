import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://WilliamLimWork:thanksgoodness-1934@exception.b3t3ymr.mongodb.net/?retryWrites=true&w=majority'
    ),
    AuthModule,
  ],
})
export class AppModule {}
