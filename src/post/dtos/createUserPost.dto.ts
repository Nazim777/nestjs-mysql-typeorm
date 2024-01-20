import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserPostDto{
    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    description:string


}