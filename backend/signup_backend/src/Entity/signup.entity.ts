import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('signup_table')
export class signupEntity {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    username : string;
    @Column()
    email : string;
    @Column()
    password : string;
    @Column()
    age : number;
}

