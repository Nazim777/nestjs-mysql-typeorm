import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
     ){}


     findAll(){
        return this.userRepository.find({relations:['posts','profile']})
     }

     userCreate(createUserDto:CreateUserDto){
      const newUser = this.userRepository.create(createUserDto)
      return this.userRepository.save(newUser)

     }

    async userUpdate(updateUserDto:UpdateUserDto,id:number){
      const user= await this.userRepository.findOne({where:{id}})
      if (!user)
      throw new HttpException(
        'User not found to update!',
        HttpStatus.BAD_REQUEST,
      );
     await this.userRepository.update(id, updateUserDto)
     return this.userRepository.findOne({ where: { id } });
     }

    async singleUserGet(id:number){
      const user= await this.userRepository.findOne({where:{id}})
      if (!user)
      throw new HttpException(
        'User not found!',
        HttpStatus.BAD_REQUEST,
      );
      return user
     }

     async userDelete(id:number){
      const user = await this.userRepository.findOne({where:{id}})
      if(!user)
      throw new HttpException(
      "user not found to delete!",
      HttpStatus.BAD_REQUEST
      );
      await this.userRepository.delete({id})
      return{
         msg:`user deleted successfully with the id of ${id}`
      }
     }
}
