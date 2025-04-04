import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  apiUrl: string = 'https://api.freeprojectapi.com/api/EmployeeApp/'
  constructor(private http:HttpClient) { }

  createNewEmployee(obj:Employee) {
    return this.http.post(this.apiUrl + "CreateEmployee", obj)
  }
}
