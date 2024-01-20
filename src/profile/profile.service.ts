import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { Repository } from 'typeorm';
import { CreateUserProfileDto } from './dtos/createUserProfile.dto';
import { User } from 'src/typeorm/entities/user';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile) private profileRepository:Repository<Profile>,
        @InjectRepository(User) private userRepository:Repository<User>
    ){}

   async userProfileCreate(createUserProfileDto:CreateUserProfileDto,id:number){
        const user = await this.userRepository.findOne({where:{id}})
        if (!user)
        throw new HttpException(
          'User not found to create profile!',
          HttpStatus.BAD_REQUEST,
        );
        const newProfile = this.profileRepository.create(createUserProfileDto)
        const savedProfile = await this.profileRepository.save(newProfile)
        user.profile = savedProfile
        return this.userRepository.save(user)
        
       
    }
}
