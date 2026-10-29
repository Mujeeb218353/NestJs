import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

  private users: { id: number, name: string, position: string }[] = [
    {
      id: 1,
      name: 'User 1',
      position: 'Developer'
    },
    {
      id: 2,
      name: 'User 2',
      position: 'Manager'
    }
  ];

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: { id: number, name: string, position: string }) {
    this.users.push(user);
  }

  updateUser(id: number, user: { id: number, name: string, position: string }) {
    const index = this.users.findIndex(user => user.id === id);
    this.users[index] = user;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
        this.users.splice(index, 1);
    }
  }
}