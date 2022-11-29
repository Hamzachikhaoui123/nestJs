import { Controller,Get ,Post,Delete,Body,Put , Res ,Param,HttpStatus } from '@nestjs/common';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService:StudentService){}


    @Post()
   async  saveStudent(@Res()reponse , @Body ()createStudentDto:CreateStudentDto){
       try {
        const newStudent = await this.studentService.createStudent(createStudentDto)
    return  reponse.status(HttpStatus.CREATED).json({
        message:"Student Has been created student",
        statusCode:201,
        newStudent
    })  } catch (error) {
        return reponse.status(HttpStatus.BAD_REQUEST).json({
            statusCode:400,
            message:"Error Student not create",
            error:"Bad Resquest"
        })
       }
    }
    @Get()
    async getStudents(@Res() reponse){
        try {
            const studentsDate=await this.studentService.getAllStudents()

             
            return   reponse.status(HttpStatus.OK).json({
                message:'This List Students',
                studentsDate
            })

        } catch (error) {
            return reponse.status(HttpStatus.BAD_REQUEST).json({
                statusCode:400,
                message:"Error Student not create",
                error:"Bad Resquest"
            })
        }
    }
}
