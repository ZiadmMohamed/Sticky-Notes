import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class SignInService {

  constructor(@InjectModel(User.name) private UserModel: Model<User> , private _JwtService:JwtService) {}

 async signIn(data:any) {
     //   return { msg: 'test',user:userExist };
     
     const userExist = await this.UserModel.findOne({ email: data.email });
    if (!(userExist && bcrypt.compareSync(data.password, userExist.password)))
      throw new HttpException( 'email or password not correct', HttpStatus.UNAUTHORIZED,)

   let token= this._JwtService.sign({id: userExist._id, name: userExist.name},{secret:"signin"})

    return { msg: 'success', token: token };
  }
  
}
