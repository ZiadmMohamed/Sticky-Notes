import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignUpService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async signUp(user:any){

    const emailExist = await this.UserModel.findOne({email:user.email})
    if(emailExist)   throw new HttpException('email is allready exist', HttpStatus.CONFLICT);



    user.password = await bcrypt.hash(user.password, 10);

    this.UserModel.create(user)
    return { msg: " success " , user  }
  }
}