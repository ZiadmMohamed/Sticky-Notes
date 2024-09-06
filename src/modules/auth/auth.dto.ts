import {IsEmail,  IsStrongPassword,  MaxLength,  MinLength} from "class-validator";


export class signUpDto {
  @MaxLength(20)
  @MinLength(2)
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}
export class signInDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
}