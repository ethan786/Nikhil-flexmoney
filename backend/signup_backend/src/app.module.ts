import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupModule } from './signup/signup.module';

const ormOptions: TypeOrmModuleOptions = {
  type : 'mysql',
  host : 'localhost',
  port : 3306,
  username : 'root',
  password : 'Himanshu',
  database : 'signup',
  autoLoadEntities : true,
  synchronize : true,
};

@Module({
  imports: [SignupModule, TypeOrmModule.forRoot(ormOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
