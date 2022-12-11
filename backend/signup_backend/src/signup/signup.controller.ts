import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupDTO } from 'src/DTO/signup.dto';
import { SignupService } from './signup.service';

@Controller('signup')
export class SignupController {
    constructor (private signupservice : SignupService) {}
    @Get() 
    getAllSign() {
        return "hello world";
    }
    @Post()
    signup(@Body() signupdto : SignupDTO) {
        return this.signupservice.signup(signupdto);
    }
    @Post('login')
    login(@Body() signupdto : SignupDTO) {
        return this.signupservice.login(signupdto);
    }
    @Post('payment')
    CompletePayment(@Body() signupdto : SignupDTO) {
        return this.signupservice.CompletePayment(signupdto);
    }
}
