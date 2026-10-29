import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    @Get()
    getUsers() {
        return this.employeeService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.employeeService.getUserById(Number(id));
    }

    @Post()
    createUser(@Body() user: { id: number, name: string, position: string }) {
        this.employeeService.createUser(user);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() user: { id: number, name: string, position: string }) {
        this.employeeService.updateUser(id, user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        this.employeeService.deleteUser(id);
    }
}