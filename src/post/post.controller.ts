import { Body, Controller, Param, ParseIntPipe,Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreateUserPostDto } from './dtos/createUserPost.dto';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){}

    @Post("/:id")
    createUserPost(@Body() createUserpostDto:CreateUserPostDto, @Param("id",ParseIntPipe) id:number){
        return this.postService.userPostCreate(createUserpostDto,id)

    }
}
