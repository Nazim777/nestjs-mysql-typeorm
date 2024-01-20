import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Get()
    getAllUser(){
        return this.userService.findAll()
    }

    @Get("/:id")
    getSingleUser(@Param("id",ParseIntPipe) id:number){
        return this.userService.singleUserGet(id)

    }

    @Post()
    createUser(@Body() createUserDto:CreateUserDto){
       return this.userService.userCreate(createUserDto)

    }

    @Patch(":id")
    updateUser(@Body() updateUserDto:UpdateUserDto, @Param("id",ParseIntPipe) id:number){
        return this.userService.userUpdate(updateUserDto,id)
    }

    @Delete(":id")
   deleteUser(@Param("id",ParseIntPipe) id:number){
        return this.userService.userDelete(id)
    }



    
}
