import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: number) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() body: { name: string, grade: string }) {
    return this.studentService.createStudent(body.name, body.grade);
  }

  @Put(':id')
  updateStudent(@Param('id') id: number, @Body() body: { name: string, grade: string }) {
    return this.studentService.updateStudent(Number(id), body);
  }

  @Patch(':id')
  patchStudent(@Param('id') id: number, @Body() body: Partial<{ name: string, grade: string }>) {
    return this.studentService.patchStudent(Number(id), body);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(Number(id));
  }
}