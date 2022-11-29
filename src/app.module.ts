import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student/student.schema';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://root:rootroot@cluster0.oxusqfl.mongodb.net/NestJs?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'Student',schema:StudentSchema}]),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, StudentController, AuthController],
  providers: [AppService, StudentService, AuthService],
})
export class AppModule {}
