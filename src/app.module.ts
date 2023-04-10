import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://WilliamLimWork:thanksgoodness-1934@exception.b3t3ymr.mongodb.net/?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
