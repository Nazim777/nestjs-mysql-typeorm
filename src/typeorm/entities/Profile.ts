import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string
    @Column()
    lastName:string
    @Column()
    age:string
    @Column()
    dob:string

}