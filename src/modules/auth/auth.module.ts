import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up/sign-up.service';
import { SignUpController } from './sign-up/sign-up.controller';
import { SignInController } from './sign-in/sign-in.controller';
import { SignInService } from './sign-in/sign-in.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]) ],
  providers: [SignUpService, SignInService , JwtService],
  controllers: [SignUpController, SignInController]
})
export class AuthModule {}
