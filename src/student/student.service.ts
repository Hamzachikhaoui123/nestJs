import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from 'src/dto/create-student.dto';
import { UpdateStudentDto } from 'src/dto/update-student.dto';
import { IStudent } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private studentModel:Model<IStudent>){

       
    }
     // creating a new student inside mongooDb

     async createStudent(CreateStudentDto:CreateStudentDto):Promise<IStudent>{
        const newStudent =await new this.studentModel(CreateStudentDto)
        return newStudent.save()
     }


     //reading all the students form mongodb

     async getAllStudents():Promise<IStudent[]>{
        const StudentDate =await  this.studentModel.find()
         if(!StudentDate || StudentDate.length==0){
            throw new NotFoundException('Student exsit ')
         }
      return StudentDate
     }


     //get a specific student by using id 

        async getStudent(studentId:string):Promise<IStudent>{

            const exitStudent = await this.studentModel.findById(studentId)
            if(!exitStudent){
                throw new NotFoundException(`Student ${studentId}Not exist`)
            }
            return exitStudent
        }


        //delete User by

        async DeleteStudent(studentId:string):Promise<IStudent>{
           const existStudent= await this.studentModel.findByIdAndDelete(studentId)
           if(!existStudent){
            throw new NotFoundException(`Student Id ${studentId} Not found `)
           }
            return existStudent
        }

        async updateStudent(studentId:string,updateStudentDto:UpdateStudentDto):Promise<IStudent>{
             const existingStudent = await this.studentModel.findByIdAndUpdate(studentId,updateStudentDto,{new :true})
             if(!existingStudent){
                throw new NotFoundException(`student By id ${studentId} Not Found`)
             }
             return existingStudent
        }



}
