import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDTO } from 'src/DTO/signup.dto';
import { signupEntity } from 'src/Entity/signup.entity';
import { Repository } from 'typeorm';

interface User{
    username : string,
    email : string,
    password : string,
    age : number,
};

@Injectable()
export class SignupService {
    constructor(@InjectRepository(signupEntity) private repo : Repository<signupEntity>) {}

    async getAllSign() {
        return await this.repo.find();
    }

    async signup(user : User) {
        const newUser = new signupEntity();
        const {username, email, password, age} = user;
        if(age < 18 || age > 65) {
            throw new NotFoundException("Age limit is between 18 - 65");
        }else {
            newUser.username = username;
            newUser.email = email;
            newUser.password = password;
            newUser.age = age;
            this.repo.create(newUser);
            return await this.repo.save(newUser);
        }
    }

    login(signupdto: SignupDTO) {
        return "hello world";
    }
    // mock function 
    CompletePayment(signupdto: SignupDTO) {
        throw new Error('Method not implemented.');
    }

}
