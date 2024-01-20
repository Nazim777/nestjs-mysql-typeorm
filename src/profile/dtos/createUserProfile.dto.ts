import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserProfileDto{
    @IsString()
    @IsNotEmpty()
    firstName:string

    @IsString()
    @IsNotEmpty()
    lastName:string

    @IsString()
    @IsNotEmpty()
    age:string

    @IsString()
    @IsNotEmpty()
    dob:string
}