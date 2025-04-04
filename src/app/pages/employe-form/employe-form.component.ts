import { Component } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent {

employeeObj: Employee = new Employee

constructor(private employeeService: EmployeeService){}

onSaveEmployee() {
//this.employeeService.createNewEmployee()
}

}
