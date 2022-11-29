import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateStudentDto{

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name:string
    @IsNumber()
    @IsNotEmpty()

    roleNumber:number;
    @IsNumber()
    @IsNotEmpty()
    class:number;
    @IsString()
    @IsNotEmpty()
    gender:string
    @IsNumber()
    @IsNotEmpty()
    marks:number

}