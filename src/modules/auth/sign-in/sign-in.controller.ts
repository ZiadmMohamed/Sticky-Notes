import { Body, Controller, Post } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { signInDto } from '../auth.dto';

@Controller('sign-in')
export class SignInController {
  constructor(private _SignInService: SignInService ) {}

  @Post()
  signIn(@Body() body:signInDto) {





    return this._SignInService.signIn(body);

  }
}