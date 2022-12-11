import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { signupEntity } from 'src/Entity/signup.entity';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';

@Module({
  imports: [TypeOrmModule.forFeature([signupEntity])],
  controllers: [SignupController],
  providers: [SignupService]
})
export class SignupModule {}
