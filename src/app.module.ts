import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './typeorm/entities/Profile';
import { PostModule } from './post/post.module';
import { Post } from './typeorm/entities/Post';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'nestjs-2',
    entities: [User,Profile,Post],
    synchronize: true,
  }), ProfileModule, PostModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
