import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { User } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';
import { CreateUserPostDto } from './dtos/createUserPost.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postRepository:Repository<Post>,
        @InjectRepository(User) private userRepository:Repository<User>

    ){}

   async userPostCreate(createUserPostDto:CreateUserPostDto,id:number){
    const user = await this.userRepository.findOne({where:{id}})
    if(!user){
        throw new HttpException(
            "user not found to create post!",
            HttpStatus.BAD_REQUEST
        )
    }

    const newPost = this.postRepository.create({
        ...createUserPostDto,
        user
    })
    return this.postRepository.save(newPost)
    }
}
