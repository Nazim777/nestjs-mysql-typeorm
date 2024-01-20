import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/Profile';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/typeorm/entities/user';

@Module({
  imports:[UserModule,TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
