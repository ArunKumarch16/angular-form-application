import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private datePipe: DatePipe, private firebase: AngularFireDatabase, private httpclient: HttpClient) { }

  employeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(0),
    isPermanent: new FormControl(false)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      city: '',
      department: 0,
      isPermanent: false
    });
  }


  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  getCountries(){
    return this.httpclient.get('https://restcountries.eu/rest/v2/all'); 
    }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
    
      city: employee.city,
     
      department: employee.department,
      
      isPermanent: employee.isPermanent
    });
  }

 
}
