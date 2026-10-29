import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students: { id: number, name: string, grade: string }[] = [
    { id: 1, name: 'Ali', grade: 'A' },
    { id: 2, name: 'Ahmed', grade: 'B' },
    { id: 3, name: 'Mohammad', grade: 'C' },
    { id: 4, name: 'Mujeeb', grade: 'A+' },
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find(student => student.id === id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }

  createStudent(name: string, grade: string) {
    const newStudent = {
      id: this.students.length + 1,
      name,
      grade
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, data : {name: string, grade: string}) {
    const index = this.students.findIndex(s => s.id === id);
    const updatedStudent = this.students[index] = { id, ...data };
    return updatedStudent;
  }

  patchStudent(id: number, data: Partial<{name: string, grade: string}>) {
    const index = this.students.findIndex(s => s.id === id);
    const updatedStudent = Object.assign(this.students[index], data);
    return updatedStudent;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex(s => s.id === id);
    const deletedStudent = this.students.splice(index, 1)[0];
    return deletedStudent;
  }
}