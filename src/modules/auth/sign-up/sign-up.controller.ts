import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { signUpDto } from '../auth.dto';

@Controller('signup')
export class SignUpController {
    constructor(private _SignUpService:SignUpService){}

  @Post()
    signUp(@Body() body:signUpDto){
        return this._SignUpService.signUp(body)
    } 
}
