import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../shared/employee.service';
//import { DepartmentService } from '../../shared/department.service';
//import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  countries : any;

  constructor(private service: EmployeeService,private router: Router) {
    this.service.getCountries().subscribe((data)=>{
      this.countries = data;
      });
   }



  ngOnInit() {
    this.service.getEmployees();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    
  }

  onSubmit() {
    //if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.router.navigate(['/employee-list'],{});
   // }
  }

}
