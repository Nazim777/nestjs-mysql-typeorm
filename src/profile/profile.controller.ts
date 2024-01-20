import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import {  CreateUserProfileDto } from './dtos/createUserProfile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private profileService:ProfileService){}

    @Post("/:id")
    createUserProfile(@Body() createUserProfileDto:CreateUserProfileDto,@Param("id",ParseIntPipe) id:number){
        return this.profileService.userProfileCreate(createUserProfileDto,id)

    }
}
